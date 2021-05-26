// create model 
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../db/db.js');
var DeclaracionesJuradas = require('./empresas.models.js');
var Ventas = require('./ventas.models.js');

var Empresas = sequelize.define('empresas',{ 
    cuit: {
        type: Sequelize.BIGINT(11), //20383170959
        primaryKey: true,
        unique: {
            msg: 'El CUIT ya está registrado'
        },
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
    razon_social:{
        type: Sequelize.STRING(50),
    
        allowNull: {
            args:[false],
            msg:'No se permite denominación nulo'
        },
        validate:{
            notEmpty:{
                args:[true],
                msg:"Debe completar la denominación o nombre de la empresa"
            }
        }
            
        
    },
    rubro:{
        type: Sequelize.STRING(20),
        allowNull: {
            args:[false],// No se permite nulo
            msg:'No se permite rubro nulo'
        },
        validate:{
            notEmpty:{
                args:[true],
                msg:"Debe completar el rubro al que pertenece la empresa"
            }
        }

    },

    pass: {
        type: Sequelize.STRING(16),
        allowNull: {
            args:[false],// No se permite nulo
            msg:'No se permite contraseña nula'
        },
        validate:{
            notEmpty:{
                args:[true],
                msg:"Debe proporcionar una contraseña para el registro de la empresa"
            },
            is:{
                args:["[A-Za-z0-9\S]{4,16}$|[A-Za-z0-9\S]{4,16}$"],
                msg:"La contraseña debe tener al entre 4 y 16 caracteres, sin espacios y no se permiten simbolos especiales."
            }
        }
    }
   
});

/* el método define() recibe como primer parámetro el nombre de la base de datos, 
como segundo parámetro un objeto donde ponemos los atributos de nuestra tabla, donde 
podemos especificar que tipo de dato va representar este campo.*/

module.exports=Empresas;

