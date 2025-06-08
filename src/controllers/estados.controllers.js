const catchError = require('../utils/catchError');
const { Estados, Municipios, Localidades } = require('../models');



const getAllEstadosWithoutGeom = catchError(async (req, res) => {
    const estados = await Estados.findAll({
       
        include: [
            {
                model: Municipios,
                
                include: [
                    {
                        model: Localidades,
                        
                    }
                ]
            }
        ]
    });
    return res.json(estados);  // Return the fetched data with municipios included but without GEOM
});

const getOne = catchError(async (req, res) => {
    const { nomgeo } = req.params;  // Access the NOMGEO value from the route parameter
    const estado = await Estados.findOne({ 
        where: { NOMGEO: nomgeo },  // Find the estado with the matching NOMGEO
        
       /* include: [
            {
                model: Municipios,
               
              /*  include: [
                    {
                        model: Localidades,
                        
                    }
                ]
            }
        ]*/
    });

    if (!estado) {
        return res.status(404).json({ message: "Estado no encontrado" });  // Return 404 if not found
    }

    return res.json(estado);  // Return the found estado
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

    
    if (!estado) {
        return res.status(404).json({ message: "Algo salió mal con la búsqueda" });  
    }

    return res.json(estado);  
});

module.exports = {
    getAllEstadosWithoutGeom,
    getOne,
    getEstadoAndMunicipio
};