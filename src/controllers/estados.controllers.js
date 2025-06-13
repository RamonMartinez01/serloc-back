const catchError = require('../utils/catchError');
const { Estados, Municipios } = require('../models');



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

module.exports = {
    getAllEstadosWithoutGeom,
    getOne,
    getEstadoAndMunicipio
};