const { getLocalidades,  getOne } = require('../controllers/localidades.controllers');
const express = require('express');

const localidadesRouter = express.Router();

localidadesRouter.route("/localidades")
    .get(getLocalidades);  // GET all localidades

localidadesRouter.route("/localidades/:id")
    .get(getOne);  // GET a single localidad by ID_MUN

module.exports = localidadesRouter;