const mongoose = require('mongoose');

const DBConnection=async()=>{
    try{
        await mongoose.connect(process.env.URI_DB);
        console.log('conectado a la base de datos')
    }catch(error){
        console.log(error);
        return{
            ok:false,
            msg:'Error al conectar con la base de datos'
        };
    };
};

module.exports={DBConnection};