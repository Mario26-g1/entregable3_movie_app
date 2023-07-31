const { getAll, create, getOne, remove, update } = require('../controllers/genre.controllers');
const express = require('express');

const routeGenre = express.Router();

routeGenre.route('/')
    .get(getAll)
    .post(create);

routeGenre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routeGenre;