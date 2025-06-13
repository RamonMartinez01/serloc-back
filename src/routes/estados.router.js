const { getAllEstadosWithoutGeom, getOne, getEstadoAndMunicipio, getMunicipiosPorClaveEntidad } = require('../controllers/estados.controllers');
const express = require('express');

const estadosRouter = express.Router();

estadosRouter.route("/estados") // Encuentra todos los estados con los municipios SIN GEOM
    .get(getAllEstadosWithoutGeom)

estadosRouter.route("/estados/:nomgeo")  //Encuentra un estado por nombre **ejemplo //http://localhost:8080/estados/Guerrero
    .get(getOne);


//Encuentra un ESTADO por nombre (NOMGEO) y un MUNICIPIO por ID_MUN 
/* El endpoint tendrá que lucir parecido al siguiente ejemplo
    
ejemplo: http://localhost:8080/estado-mun/Chiapas?municipioId=169  
*/
estadosRouter.route("/estado-mun/:nomgeo")
    .get(getEstadoAndMunicipio);


// Encuentra solo los municipios que tengan relación con el estado cuyo CVE_ENT corresponda con la búqueda
estadosRouter.route("/estados/:cve_ent/municipios")
    .get(getMunicipiosPorClaveEntidad)
   

module.exports = estadosRouter;