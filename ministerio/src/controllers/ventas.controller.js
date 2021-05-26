//import sequelize
var Sequelize = require('sequelize');
const route = require('../routes/ventas.routes.js');
// import model
var Ventas= require('../models/ventas.models.js');

const ventasController={};

ventasController.list = (req, res) => {
    let attributes = { attributes: ['id','ean','denominacion', 'unidad_medida', 'cantidad_producida','cantidad_vendida', 'precio_venta'] }
    Ventas.findAll(attributes)
    .then(ventas => res.json(ventas))
    .catch(error =>  res.status(412).json({msg: error.message}));
  
}

ventasController.create = (req, res) => {
    let ventasBody={
        id: parseInt(req.body.id),
        denominacion: req.body.denominacion,
        unidad_medida:req.body.unidad_medida, 
        cantidad_producida:req.body.cantidad_producida, 
        cantidad_vendida:req.body.cantidad_vendida, 
        precio_venta:req.body.precio_venta 
    };
    Ventas.create(ventasBody)
        .then(ventas=>res.json(ventas))
        .catch(error=>res.status(400).json({msg: error.message}));
}

ventasController.read = (req, res) => {
    let ventasID=parseInt(req.params.id);
    let attributes = { attributes: ['id','ean','denominacion', 'unidad_medida', 'cantidad_producida','cantidad_vendida', 'precio_venta'] }
    Ventas.findByPk(ventasID, attributes)
        .then(empresas => res.json(empresas))
        .catch(error =>res.status(412).json({msg: error.message}));
}

ventasController.update = (req, res) => {
    let ventasBody={
        id: parseInt(req.body.id),
        denominacion: req.body.denominacion,
        unidad_medida:req.body.unidad_medida, 
        cantidad_producida:req.body.cantidad_producida, 
        cantidad_vendida:req.body.cantidad_vendida, 
        precio_venta:req.body.precio_venta 
    };
    let ventasID=parseInt(req.params.id);
    Ventas.findByPk(ventasID)
    .then(ventas=>{
            ventas.update(ventasBody)
            .then(ventas => res.json(ventas));
        }
        ).catch(error =>res.status(412).json({msg: error.message}));
}
ventasController.delete = (req, res) => {
    let ventasID=parseInt(req.params.id);
    let success1={
            msg: `Empresa de CUIT:${ventasID}` , 
            status: "success 1"
        };
    success1= JSON.stringify(success1);
    Ventas.destroy({where: {cuit: empresaCUIT}})
    .then(result => res.status(200).json(success1))
    .catch(error => res.status(412).json({msg: error.message}));
}

module.exports=ventasController;
