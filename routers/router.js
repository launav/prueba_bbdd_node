const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index desde views',
        descripcion: 'Esta es la descripcion desde el index'
    });
});

router.get('/servicios', (req, res) => {
    res.render('servicios', {
        titulo: 'Servicio desde views',
        descripcion: 'Esta es la descripción de servicios',
        data: [
            {
                "nombre": "Servicio Uno",
                "comentario": "este es el comentario del servicio Uno",
                "fecha": ''
            },
            {
                "nombre": "Servicio Dos",
                "comentario": "este es el comentario del servicio Dos",
                "fecha": ''
            },
            {
                "nombre": "Servicio Dos",
                "comentario": "este es el comentario del servicio Tres",
                "fecha": ''
            },
        ]
    });
});

module.exports = router