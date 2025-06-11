const catchError = require('../utils/catchError');
const Loc_rur_mpio_2020 = require('../models');

const getAll = catchError(async (req, res) => {
    const locRurMpio = await Loc_rur_mpio_2020.findAll()

    if (!locRurMpio || locRurMpio.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de loc_rur_mpio_2020.' 
        });
    }

    return res.status(200).json(locRurMpio);
})

module.exports = {
    getAll
}