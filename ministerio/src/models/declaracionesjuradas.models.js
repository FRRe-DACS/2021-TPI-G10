//https://www.it-swarm-es.com/es/node.js/sequelize-claves-foraneas-como-clave-primaria-compuesta/824606465/
//https://sequelize.org/v5/manual/models-definition.html
// create model 
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../db/db.js');
var Empresas = require('./empresas.models.js');
var Ventas = require('./ventas.models.js');
var DeclaracionesJuradas= sequelize.define('declaracionesjuradas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    cuit: {
        type: Sequelize.BIGINT(11), //20383170959
        validate:{
            min: {
                args: [20000000000],
                msg: "El número de CUIT no puede ser menor a lo admitido "
              },                  
            max: {
                args: [34999999999],
                msg: "El número de CUIT no puede ser mayor a lo admitido"
              },
            isInt:{
                args:[true],
                msg:"Solo se permite digitos númericos sin puntos ni guiones"
            }    
        }
    },
        
    year: {
        type: Sequelize.BIGINT(2),
        validate:{
            min: {
                args: [20],
                msg: "El año no puede ser menor a lo admitido "
              },                  
            max: {
                args: [99],
                msg: "El año no puede  ser mayor a lo admitido"
              },
            isInt:{
                args:[true],
                msg:"Solo se permite digitos númericos"
            }    
        }   
    },
    
    month: {
        type: Sequelize.BIGINT(2),
        validate:{
            min: {
                args: [1],
                msg: "El mes no puede ser menor a lo admitido "
              },                  
            max: {
                args: [12],
                msg: "El mes no puede  ser mayor a lo admitido"
              },
            isInt:{
                args:[true],
                msg:"Solo se permite digitos númericos"
            }    
        }    
    },
    
    
});


/* el método define() recibe como primer parámetro el nombre de la base de datos, 
como segundo parámetro un objeto donde ponemos los atributos de nuestra tabla, donde 
podemos especificar que tipo de dato va representar este campo.*/

DeclaracionesJuradas.belongsTo(Empresas, {
    foreignKey: "cuit", onDelete: 'CASCADE',as: 'empresas'
});


DeclaracionesJuradas.Ventas = DeclaracionesJuradas.hasMany(Ventas, { as: 'ventas', onDelete: 'cascade' });

module.exports=DeclaracionesJuradas;

// De forma predeterminada, la clave principal usa el campo id de la tabla principal y la clave externa usa la clave externa creada en el campo + tabla. Generalmente, debe especificarlo manualmente.
