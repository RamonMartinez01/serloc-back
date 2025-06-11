const express = require('express');
const { getAll, getOne } = require('../controllers/subtema.controllers');

const subtemaRouter = express.Router();

subtemaRouter.route('/subtemas')
    .get(getAll)

subtemaRouter.route('/subtema/:id')
    .get(getOne)

module.exports = subtemaRouter