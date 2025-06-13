const { getAllEstadosSinMunicipios, getOne, getEstadoAndMunicipio, getMunicipiosPorClaveEntidad, getLocalidadesPorMunicipioEstado, getMunicipioPorCleveMun } = require('../controllers/estados.controllers');
const express = require('express');

const estadosRouter = express.Router();

estadosRouter.route("/estados") // Encuentra todos los estados con los municipios SIN GEOM
    .get(getAllEstadosSinMunicipios)

// Encuentra solo los municipios que tengan relación con el estado cuyo CVE_ENT corresponda con la búqueda
estadosRouter.route("/estados/:cve_ent/municipios")
    .get(getMunicipiosPorClaveEntidad)

// Encuentra UN municipio con la clave CVE_MUN, perteneciente a un estado de clave CVE_ENT
// Ejemplo de uso >> /estados/07/municipios/95
estadosRouter.route("/estados/:cve_ent/municipios/:cve_mun")
    .get(getMunicipioPorCleveMun)

// Encuentra todas las localidades de UN municipio con la clave CVE_MUN, perteneciente a un estado de clave CVE_ENT
// Ejemplo de uso >> /estados/07/municipios/95/localidades
estadosRouter.route("/estados/:cve_ent/municipios/:cve_mun/localidades")
    .get(getLocalidadesPorMunicipioEstado)

//Encuentra un estado por nombre (NOMGEO) **ejemplo //http://localhost:8080/estados/Guerrero
estadosRouter.route("/estados/:nomgeo")  
    .get(getOne);


//Encuentra un ESTADO por nombre (NOMGEO) y un MUNICIPIO por ID_MUN 
/* El endpoint tendrá que lucir parecido al siguiente ejemplo
ejemplo: http://localhost:8080/estado-mun/Chiapas?municipioId=169  
*/
estadosRouter.route("/estado-mun/:nomgeo")
    .get(getEstadoAndMunicipio);


module.exports = estadosRouter;