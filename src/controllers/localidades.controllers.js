const catchError = require('../utils/catchError');
const Localidades = require('../models');

const getLocalidades = catchError(async (req, res) => {
    const localidades = await Localidades.findAll();

    if (!localidades || localidades.length === 0) {
        return res.status(404).json({ 
            error: true,
            message: 'No se encontraron datos de localidades.' 
        });
    }

    return res.json(localidades);  
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const localidad = await Localidades.findOne({
        where: { NOM_LOC: id }
    });
    if (!localidad) return res.status(404).json({ message: "Localidad no encontrado" });
    return res.json(localidad);
});

module.exports = {
    getLocalidades,
    getOne
};