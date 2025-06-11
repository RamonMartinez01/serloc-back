const express = require('express');
const estadosRouter = require('./estados.router');
const desLocal2020Router = require('./des_local_2020.router');
const indicadoresRouter = require('./indicadores.router');
const locRur2010Router = require('./loc_rur_2010.router');
const locRur2020Router = require('./loc_rur_2020.router');
const locRurMpio2010Router = require('./loc_rur_mpio_2010.router');
const locRurMpio2020Router = require('./loc_rur_mpio_2020.router');
const localidadesRouter = require('./localidades.router');
const municipiosRouter = require('./municipios.router');
const na2010Router = require('./na_2010.router');
const naRouter = require('./na.router');
const na2020Router = require('./na_2020.router');
const subtemaRouter = require('./subtema.controllers');
const temaRouter = require('./tema.router');
const router = express.Router();

// colocar las rutas aquí
router.use(estadosRouter)
router.use(desLocal2020Router)
router.use(indicadoresRouter)
router.use(locRur2010Router)
router.use(locRur2020Router)
router.use(locRurMpio2010Router)
router.use(locRurMpio2020Router)
router.use(localidadesRouter)
router.use(municipiosRouter)
router.use(na2010Router)
router.use(na2020Router)
router.use(naRouter)
router.use(subtemaRouter)
router.use(temaRouter)

module.exports = router;