const catchError = require('../utils/catchError');
const { Subtema } = require('../models');

const getAll = catchError(async (req, res) => {
    const subtemas = await Subtema.findAll();

    if (!subtemas || subtemas === 0) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron valores de Subtema'
        });
    }
    return res.status(200).json(subtemas);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const subtema = await Subtema.findOne({
        where: { id }
    })

    if (!subtema) { 
        return res.status(404).json({ 
            error:true,
            message: "Subtema no encontrado"
        });
    }


    return res.status(200).json(subtema); 
});

module.exports = {
    getAll,
    getOne
};