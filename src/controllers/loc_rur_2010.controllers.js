const catchError = require('../utils/catchError');
const { Loc_rur_2010 } = require('../models');

const getAll = catchError(async (req, res) => {
    const locRur = await Loc_rur_2010.findAll()

    if (!locRur || locRur.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de loc_rur_2010.' 
        });
    }

    return res.status(200).json(locRur);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const locRur = await Loc_rur_2010.findOne({
        where: { ID: id }
    });
    if (!locRur) {
        return res.status(404).json({
            message: "loc_Rur no encontrado" 
        });
    }

    return res.status(200).json(locRur); 
});

module.exports = {
    getAll,
    getOne
}