var express = require('express');
var app = express();

var Utilidad = require('../models/Utilidad');


app.get('/', (req,res) =>

    {
        Utilidad.find({},(err,utilidad)=>
        {
            if(err){

                return res.status(500).json({
                    ok : false,
                    mensaje: "Error en base de datos",
                    errors: err
                })
            }

            if(!utilidad){

                return res.status(400).json({
                    ok : false,
                    mensaje: "No encontro datos",
                    errors: err
                })
            }

            return res.status(200).json({
                    ok : true,
                    mensaje: "Correcto",
                    datos: utilidad
            })
            
        }
        )

    });

app.post('/', (req,res) =>
        {
            var body = req.body;
            
            var utilidad = new Utilidad(
                {
                    nombre : body.nombre,
                    tipo : body.tipo
                    

                }

            );

            utilidad.save((err, utilidadGuardado)=>{

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
                        datos: utilidadGuardado
                })
            });            
            
    });
    module.exports = app;
