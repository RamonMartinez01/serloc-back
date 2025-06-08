const express = require('express');
const estadosRouter = require('./estados.router');
const router = express.Router();

// colocar las rutas aquí
router.use(estadosRouter)

module.exports = router;