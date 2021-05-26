//import sequelize
var Sequelize = require('sequelize');
const route = require('../routes/declaracionesjuradas.routes.js');
// import model
var sequelize = require('../db/db.js');
var Ventas= require('../models/ventas.models.js');
var Empresas=require('../models/empresas.models.js');
var DeclaracionesJuradas=require('../models/declaracionesjuradas.models.js');
const declaracionesJuradasController={};

declaracionesJuradasController.create= (req, res) => {
    console.log(req.body);
    let declaracion= req.body
   
    let result = sequelize.transaction(transaction => 
    DeclaracionesJuradas.create(
        declaracion,
        {
            include: DeclaracionesJuradas.Ventas,
            validate: true, //cuidado
            transaction
        })
        
    ).then(declaracionesJuradas=>res.json(declaracionesJuradas))
    .catch(error=>res.status(400).json({msg: error.message}))
}

//http://localhost:3000/declaracionesjuradas/:cuit/?year=aa&month=mm
declaracionesJuradasController.read= (req, res) => {
    let cuit=parseInt(req.params.cuit);
    let periodo=req.query;
    let consulta= { cuit:cuit,...periodo};
    console.log(consulta);
    DeclaracionesJuradas.findAll({
        attributes: ['cuit','year', 'month'],
        where: consulta,
        include: [
            {
                model: Ventas, as: 'ventas',
                attributes: ['ean','denominacion','unidad_medida','cantidad_producida','cantidad_vendida','precio_venta' ]
            },
        ]
        }).then(declaracionesJuradas => res.json(declaracionesJuradas))
        .catch(error => res.status(412).json({msg: error.message}));
}

//http://localhost:3000/declaracionesjuradas/:cuit/?year=aa&month=mm
declaracionesJuradasController.list= (req, res) => {
    let consulta=req.query;
    DeclaracionesJuradas.findAll({
        attributes: ['cuit','year', 'month'],
        where: consulta,
        include: [
            {
                model: Ventas, as: 'ventas',
                attributes: ['ean','denominacion','unidad_medida','cantidad_producida','cantidad_vendida','precio_venta' ]
            },
        ]
        }).then(declaracionesJuradas => res.json(declaracionesJuradas))
        .catch(error => res.status(412).json({msg: error.message}));
}

//http://localhost:3000/declaracionesjuradas/:cuit-:year-:month
declaracionesJuradasController.delete = (req, res) => {
    let cuit=parseInt(req.params.cuit);
    let anio=parseInt(req.params.year);
    let mes=parseInt(req.params.month);

    let success1={
            msg: `Declaracion de Empresa de CUIT: ${cuit} eliminada`, 
            status: "success 1"
        };
    success1= JSON.stringify(success1);
    DeclaracionesJuradas.destroy({where: {cuit: cuit, year:anio, month:mes}})
    //.then(result => res.sendStatus(204))
    .then(result => res.status(200).json(result))
    .catch(error => res.status(412).json({msg: error.message}));
}

module.exports=declaracionesJuradasController;