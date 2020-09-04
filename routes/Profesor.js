var express = require('express');
var app = express();

var Profesor = require('../models/Profesor');


app.get('/', (req,res) =>

    {
        Profesor.find({},(err,profesor)=> {
            if(err){

                return res.status(500).json({
                    ok : false,
                    mensaje: "Error en base de datos",
                    errors: err
                })
            }

            if(!profesor){
                
                return res.status(400).json({
                    ok : false,
                    mensaje: "No encontro datos",
                    errors: err
                })
            }

            return res.status(200).json({
                    ok : true,
                    mensaje: "Correcto",
                    datos: profesor
            })
            
        }
        )

    });

app.post('/', (req,res) =>
        {
            var body = req.body;
            
            var profesor = new Profesor(
                {
                    nombre : body.nombre,
                    email : body.email,
                    tipo : body.tipo
                    
                }

            );

            profesor.save((err, profesorGuardado)=>{

                if(err){
        
                    return res.status(400).json({
                        ok : false,
                        mensaje: "Error en base de datos, no guardo",
                        errors: err
                    })
                }
            
                
                    return res.status(201).json({
                        ok : true,
                        mensaje: "Correcto",
                        datos: profesorGuardado
                })
            });            
            
    });
    module.exports = app;
