const catchError = require('../utils/catchError');
const Na = require('../models');

const getAllNa = catchError(async (req, res) => {
    const na = await Na.findAll()

    if (!na || na.length === 0) {
        return res.status(400).json({
            error: true,
            message: 'No se encontraron datos de búsqueda de todos los Na'
        });
    }

    return res.status(200).json(na);
})

const getSingleNa = catchError(async (req, res) => {
    const { id } = req.params;
    const singleNa = await Na.findOne({
        where: { ID_NA: id}
    })

    if (!singleNa || singleNa.length === 0) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron datos de Na'
        });
    }

    return res.status(200).json(singleNa)
})
module.exports = {
    getAllNa,
    getSingleNa
}