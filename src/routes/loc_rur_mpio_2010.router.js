const { getAll } = require('../controllers/loc_rur_mpio_2010.controllers');
const express = require('express');

const locRurMpio2010Router = express.Router();

locRurMpio2010Router.route('/loc-rur-mpio-2010')
    .get(getAll)

module.exports = locRurMpio2010Router