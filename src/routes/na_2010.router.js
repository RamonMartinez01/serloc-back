const { getAllNa, getSingleNa } = require('../controllers/na_2010.controllers');
const express = require('express');

const na2010Router = express.Router();

na2010Router.route('/na-2010')
    .get(getAllNa)

na2010Router.route('/na-2010/:id')
    .get(getSingleNa)

module.exports = na2010Router