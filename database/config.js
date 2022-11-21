const mongoose = require('mongoose');


const user = 'admin';
const password = '1234';
const dbName = 'pruebas-mongo';
const uri = `mongodb+srv://${user}:${password}@cluster0.qvmaxup.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const DBConnection=async()=>{
    try{
        await mongoose.connect(uri);
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