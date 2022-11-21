const express = require('express');
const { get } = require('http');

/*CONFIGURAR EXPRESS*/
const app = express();
const port = process.env.PORT || 3000;

/*CONFIGURAR CARPETA STATIC */
app.use(express.static(__dirname + '/public'));

/*CONFIGURAR TEMPLATE ENGINE */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/',require('./routers/router'))

app.listen(port, (() => {
    console.log(`servidor a la escucha del puerto ${port} `);
}));