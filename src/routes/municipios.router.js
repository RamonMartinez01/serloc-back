const { getMunicipios,  getOne } = require('../controllers/municipios.controllers');
const express = require('express');

const municipiosRouter = express.Router();

municipiosRouter.route("/municipios")
    .get(getMunicipios);  // GET all municipios

municipiosRouter.route("/municipios/:id")
    .get(getOne);  // GET a single municipio by ID_MUN

module.exports = municipiosRouter;