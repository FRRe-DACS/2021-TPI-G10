// create model 
//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('../db/db.js');
var Ventas= sequelize.define('ventas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    ean: {
        type: Sequelize.BIGINT(13), //20383170959

        // unique: {
        //     msg: 'El código EAN ya está registrado'
        // },
        validate:{
            min: {
                args: [7780000000000],
                msg: "El número de EAN de Argentina no puede ser menor 77800000000 "
                },                  
            max: {
                args: [7799999999999],
                msg: "El número de EAN de Aregntina no puede ser mayor a lo admitido"
                },
            isInt:{
                args:[true],
                msg:"Solo se permite digitos númericos sin puntos ni guiones"
            }    
        }
    },
    denominacion:{
        type: Sequelize.STRING
    },
    unidad_medida:{
        type: Sequelize.STRING
    }, 
    
    cantidad_producida:{ 
        type: Sequelize.INTEGER,
        defaultValue: 1,// El valor predeterminado es 0
    },
    cantidad_vendida:{
        type: Sequelize.BIGINT(13),
        defaultValue: 0,// El valor predeterminado es 0
    },
    precio_venta:{
        type: Sequelize.FLOAT(11,2),
        defaultValue: 0,// El valor predeterminado es 0
    }
     
});

/* el método define() recibe como primer parámetro el nombre de la base de datos, 
como segundo parámetro un objeto donde ponemos los atributos de nuestra tabla, donde 
podemos especificar que tipo de dato va representar este campo.*/

module.exports=Ventas;

