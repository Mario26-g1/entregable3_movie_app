const express = require('express');
const routeGenre = require('./genre.router');
const routerActor = require('./actor.router');
const routerDirector = require('./director.router');
const routerMovie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/genres", routeGenre)
router.use("/actors", routerActor)
router.use("/directors", routerDirector)
router.use("/movies", routerMovie)



module.exports = router;