const express = require('express');
const router = express.Router();
const {leerServicios} =require('../controllers/serviciosController');

router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Index desde views',
        descripcion: 'Esta es la descripcion desde el index'
    });
});

router.get('/servicios', leerServicios);

module.exports = router