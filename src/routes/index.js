const express = require('express');
const estadosRouter = require('./estados.router');
const desLocal2020Router = require('./des_local_2020.router');
const indicadoresRouter = require('./indicadores.router');
const locRur2010Router = require('./loc_rur_2010.router');
const locRur2020Router = require('./loc_rur_2020.router');
const locRurMpio2010Router = require('./loc_rur_mpio_2010.router');
const locRurMpio2020Router = require('./loc_rur_mpio_2020.router');
const router = express.Router();

// colocar las rutas aquí
router.use(estadosRouter)
router.use(desLocal2020Router)
router.use(indicadoresRouter)
router.use(locRur2010Router)
router.use(locRur2020Router)
router.use(locRurMpio2010Router)
router.use(locRurMpio2020Router)

module.exports = router;