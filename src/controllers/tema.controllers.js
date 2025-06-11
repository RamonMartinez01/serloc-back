const catchError = require('../utils/catchError');
const Tema = require('../models');

const getAll = catchError(async (req, res) => {
    const temas = await Tema.findAll()

    if (!temas || temas.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de Temas.' 
        });
    }

    return res.status(200).json(temas);  
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const tema = await Tema.findOne({
        where: { id }
    });
    if (!tema || tema.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: "Tema no encontrado" })};


    return res.status(200).json(tema); 
});

module.exports = {
    getAll,
    getOne
};