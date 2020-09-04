var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var llaves = require ('./llaves.js');
var cors = require ('cors');


var app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');         
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");     
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");    
    next();   
    });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var userRoutes= require ('./routes/Usuario.js');
app.use('/usuarios', userRoutes);
var utilidadRoutes= require ('./routes/Utilidad.js');
app.use('/utilidades', utilidadRoutes);
var formacionRoutes = require('./routes/Formacion');
app.use('/formaciones', formacionRoutes);
var profesorRoutes= require ('./routes/Profesor.js');
app.use('/profesores', profesorRoutes);

//conexión a BD

mongoose.connection.openUri(llaves.configuración,
    (err, res) => {
        
        if (err) throw err;
            console.log('BD corriendo: \x1b[32m%s\x1b[0m', 'online') 
    })

//Peticiones    
 app.listen(3000, ()=> { console.log('Express server corriendo en puerto 3000: \x1b[32m%s\x1b[0m', 'online');})




