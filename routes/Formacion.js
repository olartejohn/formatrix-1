var express = require('express');
var app = express();

var Formacion = require('../models/Formacion');
const { route } = require('./Usuario');



app.get('/', (req, res) =>

    {
        Formacion.find({}, (err, formaciones) => {
            if (err) {

                return res.status(500).json({
                    ok: false,
                    mensaje: "Error en base de datos",
                    errors: err
                })
            }

            if (!formaciones) {

                return res.status(400).json({
                    ok: false,
                    mensaje: "No encontro datos",
                    errors: err
                })
            }

            return res.status(200).json({
                ok: true,
                mensaje: "Correcto",
                datos: formaciones
            })

        })

    });


app.post('/', (req, res) => {
    var body = req.body;
    const { login, formador, competencias, fechaSeguimiento, acuerdos, habilitadores } = body
    const date = Date.now();



    var forma = new Formacion({
        login,
        date,
        formador,
        competencias,
        fechaSeguimiento,
        acuerdos,
        habilitadores
    });

    forma.save((err, formacionGuardada) => {

        if (err) {

            return res.status(400).json({
                ok: false,
                mensaje: "Error en base de datos, no guardo",
                errors: err
            })
        }
        return res.status(201).json({
            ok: true,
            mensaje: "Correcto",
            datos: formacionGuardada
        });
    });
});

app.post('/buscar', (req, res) => {
    const { busqueda } = req.body;
    var regex = new RegExp(busqueda, 'i');

    Promise.all([
        buscarLogin(busqueda, regex), //TODO Cris
        buscarHabilitador(busqueda, regex), //TODO Cris
        buscarFormador(busquede, regex), //TODO John
        buscarCompetencia(busqueda, regex) //TODO John
    ])
})


/* function buscarHospitales(busqueda, regex) {
    return new Promise((resolve, reject) => {
        Hospital.find({ nombre: regex })
            .populate('usuario', 'nombre correo')
            .exec((err, hospitales) => {
                if (err) {
                    reject("Error al buscar hospitales", err);
                } else {
                    resolve(hospitales);
                }
            });
    });
} */

module.exports = app;