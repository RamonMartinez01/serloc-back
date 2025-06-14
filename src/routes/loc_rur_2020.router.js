const { getAll, getOne } = require('../controllers/loc_rur_2020.controllers');
const express = require('express');

const locRur2020Router = express.Router();

locRur2020Router.route('/loc-rur-2020')
    .get(getAll)

locRur2020Router.route('/loc-rur-2020/:id')
    .get(getOne)

module.exports = locRur2020Router