const { getAllEstadosWithoutGeom, getOne, getEstadoAndMunicipio } = require('../controllers/estados.controllers');
const express = require('express');

const estadosRouter = express.Router();

estadosRouter.route("/estados") // Encuentra todos los estados con los municipios SIN GEOM
    .get(getAllEstadosWithoutGeom)

estadosRouter.route("/estados/:nomgeo")  //Encuentra un estado por nombre **ejemplo //http://localhost:8080/estados/Guerrero
    .get(getOne);

estadosRouter.route("/estado-mun/:nomgeo")
//Encuentra un ESTADO por nombre (NOMGEO) y un MUNICIPIO por ID_MUN 
/* El endpoint tendrá que lucir parecido al siguiente ejemplo
    
ejemplo: http://localhost:8080/estado-mun/Chiapas?municipioId=169  
*/

    .get(getEstadoAndMunicipio);
   

module.exports = estadosRouter;