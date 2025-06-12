const { Loc_rur_2020 } = require('../models');
const catchError = require('../utils/catchError');

const getAll = catchError(async (req, res) => {
    const locRur2020 = await Loc_rur_2020.findAll()

    if (!locRur2020 || locRur2020.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de loc_rur_2020.' 
        });
    }

    return res.status(200).json(locRur2020);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const locRur = await Loc_rur_2020.findOne({
        where: { ID: id }
    })

    if (!locRur) {
        return res.status(404).json({ 
            error: true,
            message: "loc_Rur_2020 no encontrado" 
        });
    }

    return res.status(200).json(locRur); 
});

module.exports = {
    getAll,
    getOne
}