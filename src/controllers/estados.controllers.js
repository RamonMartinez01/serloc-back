const catchError = require('../utils/catchError');
const { Estados, Municipios, Localidades } = require('../models');


// Para obtener todos solo la información de los estados
// con >> /estados
const getAllEstadosSinMunicipios = catchError(async (req, res) => {
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


// Para obtener un solo estado por nombre :NOMGEO  >>> no diferencia mayúsculas de minúsculas
// Con >> /estados/:nomgeo
// Ejemplo >> /estados/chiapas  :: /estados/Chiapas
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

//Para obtener un único municipio por su ID_MUN que pertenezca a un estado dado con :NOMGEO
// con >> GET /estado-mun/:nomgeo?municipioId=ID_MUN 
//Ejemplo >> http://localhost:8080/estado-mun/Guerrero?municipioId=408
const getEstadoAndMunicipio = catchError(async (req, res) => {
    const { nomgeo } = req.params;  // Get the NOMGEO value from the route parameter
    const { municipioId } = req.query;

    if (!municipioId) {
        return res.status(400).json({ message: "Please provide a 'municipioName' query parameter" });
    }
    
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
// Con >> /estados/:cve_ent/municipios
// Ejemplo >> /estados/07/municipios
const getMunicipiosPorClaveEntidad = catchError(async (req, res) => {
    const { cve_ent } = req.params; // el valor dinámico en la búsqueda

    const municipios = await Municipios.findAll({
        include: [
            {
                model: Estados,
                where: { CVE_ENT: cve_ent },
                attributes: [ 'NOMGEO'] // no incluye datos del estado en la respuesta
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
});

const getMunicipioPorCleveMun = catchError(async (req, res) => {
    const { cve_ent } = req.params; // el valor dinámico en la búsqueda para estados
    const { cve_mun } = req.params; // el valor dinámico en la búsqueda para municipios

    const municipio = await Municipios.findOne({
        where: { CVE_MUN: cve_mun},
        include: [
            {
                model: Estados,
                where: { CVE_ENT: cve_ent },
                attributes: [ 'NOMGEO' ]
            }
        ]
    });

    if (!municipio) {
        return res.status(404).json({
            error: true,
            message: `No se encontró información para el municipio con clave ${CVE_MUN}`
        })
    }

    return res.status(200).json(municipio);
})

// Para obtener todas las localidades de un municipio correspondiente a un CVE_MUN, que a su vez correspondan a un estado respectivo al CVE_ENT dado. 
// Ejempolo > http://localhost:8080/estados/07/municipios/95/localidades
const getLocalidadesPorMunicipioEstado = catchError(async (req, res) => {
    const { cve_ent } = req.params; // el valor dinámico en la búsqueda para estados
    const { cve_mun } = req.params;

    const localidades = await Localidades.findAll({
        include: [
           {
                model: Municipios,
                where: { CVE_MUN: cve_mun },
                attributes: [ 'NOMGEO' ],
                include: [
                    {
                        model: Estados,
                        where: { CVE_ENT: cve_ent },
                        attributes: [ 'NOMGEO' ],
                    }
                ]
              
           }
        ]
    });

    if (!localidades || localidades === 0) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron localidades'
        })
    }

    return res.status(200).json(localidades)
})

module.exports = {
    getAllEstadosSinMunicipios,
    getOne,
    getEstadoAndMunicipio,
    getMunicipiosPorClaveEntidad,
    getLocalidadesPorMunicipioEstado,
    getMunicipioPorCleveMun
};