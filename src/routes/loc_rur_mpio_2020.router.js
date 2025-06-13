const { getAll, getOne } = require('../controllers/loc_rur_mpio_2020.controllers');
const express = require('express');

const locRurMpio2020Router = express.Router();

locRurMpio2020Router.route('/loc-rur-mpio-2020')
    .get(getAll)

locRurMpio2020Router.route('/loc-rur-mpio-2020/:id')
    .get(getOne)

module.exports = locRurMpio2020Router