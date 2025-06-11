const { getAll, getOne } = require('../controllers/indicadores.controlletrs');
const express = require('express');

const indicadoresRouter = express.Router();

indicadoresRouter.route('/indicadores')
    .get(getAll)

indicadoresRouter.route('/indicador/:id')
    .get( getOne )

module.exports = indicadoresRouter