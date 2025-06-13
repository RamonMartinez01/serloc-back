const catchError = require('../utils/catchError');
const { Municipios, Localidades, Estados } = require('../models');

const getMunicipios = catchError(async (req, res) => {
    const municipios = await Municipios.findAll({
        include: [
            {
                model: Estados, // Incluye Estados
                attributes: ['NOMGEO']  // Solo incluye NOMGEO (nombre del Estado)
            }
        ]
    });

    if (!municipios || municipios.length === 0) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron datos de municipios.'
        });
    }

    return res.status(200).json(municipios);
});

const getMunicipiosConLocalidades = catchError(async (req, res) => {
    const municipios = await Municipios.findAll({
        include: [
            {
                model: Localidades,
            },
            {
                model: Estados, // Incluye Estados
                attributes: ['NOMGEO']  // Solo incluye NOMGEO (nombre del Estado)
            }
        ]
    });

    if (!municipios || municipios.length === 0) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron datos de municipios con localidades.'
        });
    }

    return res.status(200).json(municipios);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const municipio = await Municipios.findOne({
        where: { NOMGEO: id },
        include: [
            {
                model: Localidades, // Incluye modelo Localidades

            },
            {
                model: Estados, // Incluye Estados
                attributes: ['NOMGEO']  // Solo incluye NOMGEO (nombre del Estado)
            }
        ]
    })

    if (!municipio) {
        return res.status(404).json({
            error: true,
            message: "Municipio no encontrado"
        });
    }

    return res.status(200).json(municipio);
});

module.exports = {
    getMunicipios,
    getOne,
    getMunicipiosConLocalidades
};