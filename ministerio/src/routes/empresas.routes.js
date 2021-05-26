var express = require('express');
var empresasRoute = express();
// import controller
const empresasController = require('../controllers/empresas.controller.js')

// create routes
empresasRoute.get('/', empresasController.index);
empresasRoute.get('/empresas', empresasController.list);
empresasRoute.post('/empresas', empresasController.create);
empresasRoute.get('/empresas/:cuit', empresasController.read);
empresasRoute.put('/empresas', empresasController.update);
empresasRoute.delete('/empresas/:cuit', empresasController.delete);

// export routes
module.exports = empresasRoute;