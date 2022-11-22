const Servicio = require('../models/ServicioModel');

const leerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();

        res.render('servicios', {
            titulo: 'Servicio desde views',
            descripcion: 'Esta es la descripción de servicios',
            data: servicios
        });
    } catch (error) {
        return {
            ok: false,
            msg: 'Error al leer los servicios '
        }
    };

};

module.exports={
    leerServicios
}