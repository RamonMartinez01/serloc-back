# Documentación de Endpoints - API Serloc

Este documento describe los endpoints disponibles en la API del proyecto Serloc, incluyendo su estructura, métodos disponibles y asociaciones relevantes.

---

## Estructura general

- Base URL de ejemplo: `http://localhost:8080/`
- Todos los endpoints usan el método `GET` en esta versión.

---

## Endpoints por modelo

### Estados
- `GET /estados` → Lista todos los estados con sus municipios.
  
- `GET /estados/:nomgeo` → Devuelve un estado por su nombre (`NOMGEO`) con municipios incluidos.

Un ejemplo de esto puede ser:

  `http://localhost:8080/estados/Guerrero`
  
  
- `GET /estado-mun/:nomgeo?municipioId=ID_MUN` → Devuelve un estado con un municipio específico por ID.

Un ejemplo de esto puede ser:

http: //localhost:8080/ estado-mun/ **Guerrero** ?municipioId= **408**

```http://localhost:8080/estado-mun/Guerrero?municipioId=408```

Donde los únicos valores dinámicos son **:nomgeo** y **ID_MUN**, en este caso **Guerreo** y **408**

### Municipios
- `GET /municipios` → Lista todos los municipios con localidades y nombre del estado.
- `GET /municipios/:nomgeo` → Devuelve un municipio por nombre (`NOMGEO`) con sus localidades y estado.

### Localidades
- `GET /localidades` → Lista todas las localidades.
- `GET /localidades/:id` → Devuelve una localidad por ID (`ID_LOC`).

### des_local_2020
- `GET /des-local-2020` → Lista todos los registros de desarrollo local.
- `GET /des-local-2020/:id` → Devuelve un registro por ID.

### loc_rur_2010 / loc_rur_2020 / loc_rur_mpio_2010 / loc_rur_mpio_2020
- `GET /loc-rur-2010` y `/loc-rur-2010/:id`
- `GET /loc-rur-2020` y `/loc-rur-2020/:id`
- `GET /loc-rur-mpio-2010` y `/loc-rur-mpio-2010/:id`
- `GET /loc-rur-mpio-2020` y `/loc-rur-mpio-2020/:id`

Todos funcionan igual: listado general y consulta por ID.

### na, na_2010, na_2020
- `GET /na-noyear` y `/na-noyear/:id` → Modelo `Na`
- `GET /na-2010` y `/na-2010/:id` → Modelo `Na_2010`
- `GET /na-2020` y `/na-2020/:id` → Modelo `Na_2020`

Nota: `Na` se relaciona con `Municipios` (1:N), pero esa relación no se expresa aún en controladores.

### indicadores
- `GET /indicadores` → Lista todos los indicadores.
- `GET /indicadores/:id` → Devuelve un indicador por ID.

Nota: El modelo tiene asociaciones no incluidas aún en la lógica de los controladores.

### subtema
- `GET /subtemas` → Lista todos los subtemas.
- `GET /subtema/:id` → Devuelve un subtema por ID.

### tema
- `GET /temas` → Lista todos los temas.
- `GET /tema/:id` → Devuelve un tema por ID.

---

## Notas adicionales

- Algunos modelos como `Na`, `Indicadores`, `Tema` y `Subtema` tienen relaciones declaradas en sus modelos que no se reflejan en los controladores. Esto puede mejorarse en futuras versiones.
- La convención actual favorece el uso de nombres descriptivos (`/na-noyear` en lugar de `/na`) para evitar colisiones semánticas.
- Se recomienda estandarizar la búsqueda por ID real (`ID_MUN`, `ID_LOC`, etc.) y evitar búsquedas por nombre salvo que se documente claramente.

---
