var express = require('express');
var declaracionesJuradasRoute = express();
// import controller
const declaracionesJuradasController = require('../controllers/declaracionesjuradas.controller.js')

// create routes
declaracionesJuradasRoute.get('/declaracionesjuradas', declaracionesJuradasController.list);
declaracionesJuradasRoute.post('/declaracionesjuradas', declaracionesJuradasController.create);
declaracionesJuradasRoute.get('/declaracionesjuradas/:cuit', declaracionesJuradasController.read);
// declaracionesJuradasRoute.put('declaracionesjuradas', declaracionesJuradasController.update);
declaracionesJuradasRoute.delete('/declaracionesjuradas/:cuit-:year-:month', declaracionesJuradasController.delete);

// export routes
module.exports = declaracionesJuradasRoute;