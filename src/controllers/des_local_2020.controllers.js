const catchError = require('../utils/catchError');
const { Des_local_2020 } = require('../models');

const getAll = catchError(async (req, res) => {
    const desLocal = await Des_local_2020.findAll()

    if (!desLocal || desLocal.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de des_local_2020.' 
        });
    }

    return res.status(200).json(desLocal);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const desLocal = await Des_local_2020.findOne({
        where: { id }
    });
    if (!desLocal) {
        return res.status(404).json({ 
            error: true,
            message: "No se encontró el registro solicitado en des_local_2020" 
        });
    }


    return res.status(200).json(desLocal); 
});

module.exports = {
    getAll,
    getOne
}