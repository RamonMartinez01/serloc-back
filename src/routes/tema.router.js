const { getAll, getOne } = require('../controllers/tema.controllers');
const express = require('express');

const temaRouter = express.Router();

temaRouter.route('/temas')
    .get(getAll)

temaRouter.route('/tema/:id')
    .get( getOne )

module.exports = temaRouter