const catchError = require('../utils/catchError');
const { Indicadores } = require('../models');

const getAll = catchError(async (req, res) => {
    const indicadores = await Indicadores.findAll();

    if (!indicadores || indicadores.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de indicadores.' 
        });
    }
    
    return res.json(indicadores);  
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const indicador = await Indicadores.findOne({
        where: { id }
    });
    if (!indicador) return res.status(404).json({ message: "Indicador no encontrado" });


    return res.status(200).json(indicador); 
});

module.exports = {
    getAll,
    getOne
};