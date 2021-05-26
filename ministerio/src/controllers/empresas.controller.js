//import sequelize
var Sequelize = require('sequelize');
const route = require('../routes/empresas.routes.js');
// import model
var Empresas= require('../models/empresas.models.js');

const empresasController={};

empresasController.index=(req, res) => {
    return res.send('<h2>Bienvenido al ministerio<h2>');
}

empresasController.list = (req, res) => {
    Empresas.findAll({ attributes: ['cuit','razon_social', 'rubro', 'pass'] })
    .then(users => res.json(users))
    .catch(error =>  res.status(412).json({msg: error.message}));
  
}

empresasController.create = (req, res) => {
    let empresaBody={
        cuit: parseInt(req.body.cuit),
        razon_social: req.body.razon_social,
        rubro:req.body. rubro, 
        pass: req.body.pass
    };
    Empresas.create(empresaBody)
        .then(empresas=>res.json(empresas))
        .catch(error=>res.status(400).json({msg: error.message}));
}

empresasController.read = (req, res) => {
    let empresaCUIT=parseInt(req.params.cuit);
    Empresas.findByPk(empresaCUIT, 
        { attributes: ['cuit','razon_social','rubro','pass'] })
    .then(empresas => res.json(empresas))
    .catch(error =>res.status(412).json({msg: error.message}));
}

empresasController.update = (req, res) => {
    let empresaBody={
        cuit: parseInt(req.body.cuit),
        razon_social: req.body.razon_social,
        rubro:req.body.rubro, 
        pass: req.body.pass
    };
    let empresaCUIT=parseInt(req.params.cuit);
    Empresas.findByPk(empresaCUIT)
    .then(empresas=>{
            empresas.update(empresaBody)
            .then(empresas => res.json(empresas));
        }
        ).catch(error =>res.status(412).json({msg: error.message}));
}
empresasController.delete = (req, res) => {
    let empresaCUIT=parseInt(req.params.cuit);
    let success1={
            msg: `Empresa de CUIT:${empresaCUIT} eliminada` , 
            status: "success 1"
        };
    success1= JSON.stringify(success1);
    Empresas.destroy({where: {cuit: empresaCUIT}})
    //.then(result => res.sendStatus(204))
    .then(result => res.status(200).json(success1))
    .catch(error => res.status(412).json({msg: error.message}));
}

module.exports=empresasController;

