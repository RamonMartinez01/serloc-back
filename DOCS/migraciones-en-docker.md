# Ejecución de Migraciones con Sequelize dentro del entorno Docker

Este documento explica de forma sencilla cómo ejecutar **migraciones** en una aplicación backend construida con **Node.js**, **Sequelize** y **Docker**.

---

## ¿Qué es una migración?

Primero, **Sequelize** es un Object-Relational Mapper (ORM) para **Node.js** que simplifica la interacción con bases de datos relacionales. Permite a los desarrolladores trabajar con bases de datos SQL usando JavaScript,

Una **migración** es una forma de mantener sincronizada la estructura de tu base de datos con el código de tu aplicación. Por ejemplo, si agregas una tabla o una nueva columna en tu modelo de Sequelize, necesitas que esos cambios también existan en la base de datos real. O, en casos como el de este proyecto en el que ya existe la base de datos, y solo necesitas trabajar con sus datos, puedes crear los modelos en tu backend y **Sequelize** comparará y validará los campos de una entidad con los de otra (estos campos deben coincidir en los respectivos Schema y tabla de un lado y otro). Las migraciones automatizan ese proceso.

---

## Contexto de este proyecto

Por ahora este ecosistema está contenido en Docker y se compone de dos partes:

1. **Base de datos** PostgreSQL/PostGIS (`cont-postgis`)
2. **Aplicación backend** (`cont-serloc-back`)

Ambos servicios comparten la misma red de Docker (`database_network`), por lo que pueden comunicarse entre sí por el nombre del contenedor.

---

## ¿Cuándo se deben ejecutar las migraciones?

| Situación | ¿Ejecutar migraciones? | Explicación técnica |
|----------|------------------------|---------------------|
| Inicias el proyecto en un entorno nuevo (por ejemplo, tras clonar el repositorio) y ya restauraste la base de datos | ✅ Sí | La base de datos contiene los datos, pero Sequelize aún no ha registrado las migraciones como aplicadas. Ejecutarlas permitirá que Sequelize valide la estructura esperada y registre internamente que ya fue aplicada (la palabra clave aquí es "valide"). No se borrarán ni alterarán los datos existentes. |
| Agregas una nueva tabla o columna en tu backend | ✅ Sí | Necesitas aplicar los cambios definidos en esa migración para que la estructura del backend se sincronice correctamente con la base de datos restaurada. |
| Reinicias contenedores (`docker-compose down && docker-compose up`) | ❌ No | Este comando reinicia los servicios pero **no borra los volúmenes**. La base de datos y las tablas siguen existiendo, por lo tanto las migraciones no deben ejecutarse de nuevo (nunca se perdió la sincronía). |
| Eliminas los volúmenes (`docker-compose down -v`) | ✅ Sí | Eliminar volúmenes borra también los archivos internos de la base de datos. Tras restaurar la base nuevamente, deberás ejecutar las migraciones para que Sequelize **registre, compruebe y valide** la estructura actual. |

---

## ¿Cómo ejecutar migraciones dentro de este proyecto de Docker?

> Asegúrate de que ambos contenedores (base de datos y backend) estén corriendo.  
> Puedes iniciar todo con:

```
cd database
docker-compose up -d

 # En otra terminal
cd ../serloc-back
docker-compose up --build
```
---

## Una vez levantado todo, sigue estos pasos:

### 1.- Entra al contenedor del backend

En una terminal diferente a donde corriste este comando ```docker-compose up --build```, ejecuta el siguiente:

```docker exec -it cont-serloc-back sh```

Esto abrirá una terminal *dentro del contenedor* de tu aplicación backend.

### 2.- Ejecuta las migraciones

Ya dentro del contenedor mirarás esto ```/app #```, ahí debes correr este comando:

```npx sequelize-cli db:migrate```

Esto aplicará todas las migraciones pendientes a la base de datos.

---

## Resultado esperado

Si todo está bien configurado, deberías ver un mensajes como:

```
== 20250607011756-create-estados: migrating =======
== 20250607011756-create-estados: migrated (0.113s)

== 20250607040052-create-municipios: migrating =======
== 20250607040052-create-municipios: migrated (0.068s)
```

## Nota final

Si todo salió bien, podrás ver la API en tu navegador en ```localhost:8080```
