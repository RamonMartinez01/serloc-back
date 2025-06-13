const { getAll, getOne } = require('../controllers/indicadores.controllers');
const express = require('express');

const indicadoresRouter = express.Router();

indicadoresRouter.route('/indicadores')
    .get(getAll)

indicadoresRouter.route('/indicadores/:id')
    .get( getOne )

module.exports = indicadoresRouter