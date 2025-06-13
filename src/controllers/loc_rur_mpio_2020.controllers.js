const catchError = require('../utils/catchError');
const { Loc_rur_mpio_2020 } = require('../models');

const getAll = catchError(async (req, res) => {
    const locRurMpio = await Loc_rur_mpio_2020.findAll()

    if (!locRurMpio || locRurMpio.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de loc_rur_mpio_2020.' 
        });
    }

    return res.status(200).json(locRurMpio);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const locRurMpio = await Loc_rur_mpio_2020.findOne({
        where: { ID_MUN_2020: id }
    })

    if (!locRurMpio) {
        return res.status(404).json({ 
            error: true,
            message: "loc_rur_mpio_2020 no encontrado" 
        });
    }

    return res.status(200).json(locRurMpio); 
});

module.exports = {
    getAll,
    getOne
}