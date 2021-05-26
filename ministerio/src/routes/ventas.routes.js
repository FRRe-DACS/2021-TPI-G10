var express = require('express');
var ventasRoute = express();
// import controller
const ventasController = require('../controllers/ventas.controller.js')

// create routes
ventasRoute.get('/ventas', ventasController.list);
ventasRoute.post('/ventas', ventasController.create);
ventasRoute.get('/ventas/:id', ventasController.read);
ventasRoute.put('/ventas', ventasController.update);
ventasRoute.delete('/ventas/:id', ventasController.delete);
// export routes
module.exports = ventasRoute;