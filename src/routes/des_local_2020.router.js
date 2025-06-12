const { getAll, getOne } = require('../controllers/des_local_2020.controllers');
const express = require('express');

const desLocal2020Router = express.Router();

desLocal2020Router.route('/des-local-2020')
    .get(getAll)

desLocal2020Router.route('/des-local-2020/:id')
    get(getOne)

module.exports = desLocal2020Router