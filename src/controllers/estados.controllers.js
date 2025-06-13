const catchError = require('../utils/catchError');
const { Estados, Municipios } = require('../models');
const { where } = require('sequelize');



const getAllEstadosWithoutGeom = catchError(async (req, res) => {
    const estados = await Estados.findAll({
       /* include: [
            {
                model: Municipios,
            }
        ]*/
    });

    if (!estados || estados.length === 0){
        return res.status(404).json({
            error: true,
            message: 'No se encontraron datos de Estados'
        })
    }
    return res.status(200).json(estados);  // Return the fetched data with municipios included but without GEOM
});

const getOne = catchError(async (req, res) => {
    const { nomgeo } = req.params;  // Access the NOMGEO value from the route parameter
    const estado = await Estados.findOne({ 
        where: { NOMGEO: nomgeo },  // Find the estado with the matching NOMGEO
        include: [
            {
                model: Municipios,             
            }
        ]
    });

    if (!estado) {
        return res.status(404).json({ message: "Estado no encontrado" });  // Return 404 if not found
    }

    return res.status(200).json(estado);  // Return the found estado
});


const getEstadoAndMunicipio = catchError(async (req, res) => {
    const { nomgeo } = req.params;  // Get the NOMGEO value from the route parameter
    const { municipioId } = req.query;

    if (!municipioId) {
        return res.status(400).json({ message: "Please provide a 'municipioName' query parameter" });
    }
    
    // Find the estado
    const estado = await Estados.findOne({
        where: { NOMGEO: nomgeo },
        include: [{
            model: Municipios, // Include related municipios
            where: { ID_MUN: municipioId },
           
        }]
    });

    
    if (!estado || estado.lenght === 0) {
        return res.status(404).json({
            error: true,
            message: "No se encontraron datos de este Estado" });  
    }

    return res.status(200).json(estado);  
});


// Para obtener solo los municipios correspondientes a un estado, buscando por CVE_ENT
// No incliye datos del estado, SOLO MUNICIPIOS
const getMunicipiosPorClaveEntidad = catchError(async (req, res) => {
    const { cve_ent } = req.params; // el valor dinámico en la búsqueda

    const municipios = await Municipios.findAll({
        include: [
            {
                model: Estados,
                where: { CVE_ENT: cve_ent },
                attributes: [] // no incluye datos del estado en la respuesta
            }
        ]
    });

    if (!municipios || municipios.lenght === 0) {
        return res.status(404).json({
            error: true,
            message: `No se encontraron municipios para el estado con CVE_ENT = ${cve_ent}`
        })
    }

    return res.status(200).json(municipios)
})

module.exports = {
    getAllEstadosWithoutGeom,
    getOne,
    getEstadoAndMunicipio,
    getMunicipiosPorClaveEntidad
};