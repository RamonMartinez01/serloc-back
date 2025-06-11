const Loc_rur_2020 = require('../models/Loc_rur_2020');
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
})

module.exports = {
    getAll
}