const catchError = require('../utils/catchError');
const { Na_2020 } = require('../models');

const getAllNa = catchError(async (req, res) => {
    const na = await Na_2020.findAll()

    if (!na || na.length === 0) {
        return res.status(400).json({
            error: true,
            message: 'No se encontraron datos de búsqueda de todos los Na_2020'
        });
    }

    return res.status(200).json(na);
})

const getSingleNa = catchError(async (req, res) => {
    const { id } = req.params;
    const singleNa = await Na_2020.findOne({
        where: { ID: id}
    })

    if (!singleNa) {
        return res.status(404).json({
            error: true,
            message: 'No se encontraron datos de Na_2020'
        });
    }

    return res.status(200).json(singleNa)
})
module.exports = {
    getAllNa,
    getSingleNa
}