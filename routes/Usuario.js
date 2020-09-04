var express = require('express');
var bcrypt = require('bcryptjs');
var app = express();

var Usuario = require('../models/Usuario');

app.get('/', (req,res) =>

    {
        Usuario.find({},(err,usuarios)=>
        {
            if(err){

                return res.status(500).json({
                    ok : false,
                    mensaje: "Error en base de datos",
                    errors: err
                })
            }

            if(!usuarios){

                return res.status(400).json({
                    ok : false,
                    mensaje: "No encontro datos",
                    errors: err
                })
            }

            return res.status(200).json({
                    ok : true,
                    mensaje: "Correcto",
                    datos: usuarios
            })
            
        }
        )

    });

app.post('/', (req,res) =>
        {
            var body = req.body;
            
            var usuario = new Usuario(
                {
                    nombre : body.nombre,
                    password : bcrypt.hashSync(body.password, 10),
                    correo : body.correo,
                    rol : body.rol

                }

            );
    
usuario.save((err, usuarioGuardado)=>{

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
                datos: usuarioGuardado
        })
    });    

    });
    module.exports = app;
