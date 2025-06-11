const { getAllNa, getSingleNa } = require('../controllers/na_2020.controllers');
const express = require('express');

const na2020Router = express.Router();

na2020Router.route('/na-2020')
    .get(getAllNa)

na2020Router.route('/na-2020/:id')
    .get(getSingleNa)

module.exports = na2020Router