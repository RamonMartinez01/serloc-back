# Conexión Backend ↔ PostgreSQL en Contenedores Docker

Esta documentación describe cómo está configurada y por qué funciona la conexión entre el backend del proyecto y la base de datos PostgreSQL contenida en Docker, usando Sequelize como ORM.

---

## Estructura de conexión

El backend accede a la base de datos mediante una **variable de entorno** `DATABASE_URL` definida en un archivo `.env`. La conexión es interpretada por **Sequelize** gracias a la propiedad especial `use_env_variable`.

---

## `.env` – Variable de conexión

```DATABASE_URL=postgres://postgres:postgres@cont-postgis:5432/siclr_db```

Esta variable resume en una sola línea todos los datos necesarios para conectarse a PostgreSQL:

| Segmento | Significado |
|----------|------------------------|
| ```postgres://``` | Protocolo de conexión para PostgreSQL |
| ```postgres:postgres``` | Usuario y contraseña (usuario:contraseña) |
| ```@cont-postgis``` | Hostname del contenedor de la base de datos (definido en ```docker-compose```) |
| ```:5432``` | Puerto por el que PostgreSQL escucha dentro del contenedor |
| ```/siclr_db``` | Nombre de la base de datos a la que queremos acceder |

#### Nota importante:
Esto es posible porque ambos contenedores comparten la misma red de Docker (```database_network```).

```cont-postgis``` debe coincidir con el ```container_name``` en el ```docker-compose.yml``` del servicio ```database```.

---

## Cómo se accede al .env en el entorno de Docker.

El archivo ```.env``` debe ser cargado dentro del contenedor del backend gracias a la propiedad ```env_file```.

```
...
ports:
      - "8080:8080"
    env_file:
      - .env
    networks:
      - database_network
...
```
Esto permite que ```process.env.DATABASE_URL``` esté disponible dentro del código de ```Node.js```.

#### ¿Por qué?
Cuando ejecutas un contenedor con ```docker run``` o ```docker-compose up```, Docker crea su propio entorno de ejecución. El sistema de archivos del contenedor no tiene acceso al archivo ```.env``` (porque ```.env``` se queda en el entorno del host), Docker tomará ese valor sólo si se lo especificas explícitamente.

La propiedad ```env_file: - .env``` le dice a Docker:

“Toma las variables definidas en el archivo ```.env``` de la máquina host y colócalas dentro del entorno del contenedor como variables de entorno.”

---

## src/config/config.js – Configuración para Sequelize CLI

```
require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
```
Sequelize CLI (usado para ```migrate```, ```seed```, y otros.) necesita saber cómo conectarse en distintos entornos.

En lugar de definir ```username```, ```password```, ```host```, etc., usamos ```use_env_variabl```e para que Sequelize tome todo desde ```process.env.DATABASE_URL```.

---

## src/utils/connection.js – Conexión para la App

```
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
```
#### Aquí usamos Sequelize en tiempo de ejecución para:

* Conectar a la base de datos cuando la app inicia.

* Usar la misma URL de conexión que definimos en ```.env```.

---

## ¿Y si cambiamos de base de datos o de usuario?

Solo actualiza la variable ```DATABASE_URL```:

```DATABASE_URL=postgres://nuevo_usuario:nueva_contraseña@nuevo_host:nuevo_puerto/nueva_db```

Ejemplo para cambiar a una base remota, por ejemoplo al alojar la base de datos en Amazon Web Services o Azure, etc..:

```DATABASE_URL=postgres://admin:supersegura@db-aws.example.com:5432/produccion_db```

Y eso es todo. Todo el backend se adaptará automáticamente sin tener que tocar los archivos fuente.

---

## Tips adicionales

Si cambias el nombre del contenedor de la base (```cont-postgis```), también debes actualizarlo en .env.

Verifica que los contenedores estén en la misma red de Docker si usas nombres de contenedor como ```host```.

Ejecuta ```docker-compose down -v``` para reiniciar completamente los volúmenes si se necesita una limpieza profunda.

---

## Flujo típico de conexión


```mermaid
graph TD;
    A[.env con DATABASE_URL] --> B[Docker levanta contenedor backend con env_file]
    B --> C[Sequelize CLI usa config/config.js con use_env_variable]
    B --> D[Sequelize Runtime usa utils/connection.js con process.env.DATABASE_URL]
    C --> E[Se ejecutan migraciones con éxito]
    D --> F[Backend se conecta a PostgreSQL]
```

---

## Resumen

El uso de ```DATABASE_URL``` centraliza la configuración de conexión y hace que tanto la app como Sequelize CLI trabajen de manera uniforme. Al estar en ```.env```, puedes cambiar la conexión sin tocar tu código.

--

# Notas adicionales para desarrolladores

## ¿Qué pasa si no usamos env_file?

Si no especificamos el bloque:

```
env_file:
  - .env
```
en el archivo ```docker-compose.yml``` del backend, entonces las variables definidas en el archivo ```.env``` **no estarán disponibles dentro del entorno del contenedor**. Esto significa que cualquier línea en el código que dependa de estas variables, como:

```process.env.DATABASE_URL```

retornará ```undefined```.
Y si Sequelize intenta usar ```undefined``` como cadena de conexión, fallará con un error similar a:

```SequelizeConnectionError: no PostgreSQL user name specified in startup packet```

Esto ocurre porque:

- Docker ejecuta los contenedores en un entorno **aislado del sistema host**.

- Las variables del archivo ```.env``` viven en el sistema host, y **no son visibles** dentro del contenedor a menos que se le indiquen explícitamente.

- ```env_file``` es la manera de pasar esas variables del host al contenedor de forma sencilla.

##  ¿Para qué usamos `require('dotenv').config();`?

Este fragmento de código lo vemos repetido en archivos como ```server.js```, ```app.js``` y ```config/config.js```:

```require('dotenv').config();```

Esta línea **carga automáticamente las variables definidas en el archivo** ```.env``` **al objeto** ```process.env``` **cuando estamos ejecutando la aplicación fuera de Docker**, por ejemplo, en desarrollo local sin contenedores.

> Es decir, en entornos fuera de Docker, es gracias a ```dotenv``` que podemos hacer:
>
> ```process.env.DATABASE_URL```
>
> y obtener el valor correcto.
>
> En cambio, **dentro de un contenedor Docker**, esa línea no es suficiente por sí sola. Necesitamos también pasar las variables con ```env_file```, como se explicó antes.

#### En resumen:

| Entorno | ¿Necesitamos ```dotenv```? | ¿Necesitamos env_file? |
|----------|------------------------|----------------------------|
| Desarrollo local (sin Docker)` | ✅ Sí | ❌ No |
| Desarrollo Docker` | ✅ Sí | ✅ Sí |




