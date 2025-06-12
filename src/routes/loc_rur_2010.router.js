const { getAll, getOne } = require('../controllers/loc_rur_2010.controllers');
const express = require('express');

const locRur2010Router = express.Router();

locRur2010Router.route('/loc-rur-2010')
    .get(getAll)

locRur2010Router.route('/loc-rur-2010/:id')
    .get(getOne)

module.exports = locRur2010Router