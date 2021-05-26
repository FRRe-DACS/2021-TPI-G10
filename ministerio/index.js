//Server generated
const express = require('express');
var Sequelize = require('sequelize');

//imports models
var DeclaracionesJuradas = require('./src/models/declaracionesjuradas.models.js');
var Empresas = require('./src/models/empresas.models.js');
var Ventas = require('./src/models/ventas.models.js');

//cors
var cors = require('cors');
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Content-Type:application/json, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.header('Allow', 'GET, POST, PATCH, PUT, DELETE');
    next();
});
// GET /api/reports
// POST /api/reports
// PUT /api/reports/:_id
// DELETE /api/reports/:_id
//imports routes 
//empresas
const empresasRoute = require('./src/routes/empresas.routes.js');
app.use('/', empresasRoute);
//ventas
const ventasRoute= require('./src/routes/ventas.routes.js');
app.use('/',ventasRoute);
//declaracionesJuradas
const declaracionesJuradasRoute= require('./src/routes/declaracionesjuradas.routes.js');
app.use('/',declaracionesJuradasRoute);

//Run Server
var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server running at http://${IP}:${Port}/`);
    }
});