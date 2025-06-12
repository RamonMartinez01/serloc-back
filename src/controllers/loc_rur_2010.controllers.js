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
})

module.exports = {
    getAll
}