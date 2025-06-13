const { getAll, getOne } = require('../controllers/loc_rur_mpio_2010.controllers');
const express = require('express');

const locRurMpio2010Router = express.Router();

locRurMpio2010Router.route('/loc-rur-mpio-2010')
    .get(getAll)

locRurMpio2010Router.route('/loc-rur-mpio-2010/:id')
    .get(getOne)

module.exports = locRurMpio2010Router