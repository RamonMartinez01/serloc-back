const { getAllNa, getSingleNa } = require('../controllers/na.controllers');
const express = require('express');

const naRouter = express.Router();

naRouter.route('/na-noyear')
    .get(getAllNa)

naRouter.route('/na-noyear/:id')
    .get(getSingleNa)

module.exports = naRouter