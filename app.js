const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Configuración de Handlebars como motor de vistas
app.set('view engine', 'hbs');

// Registro de parciales para Handlebars
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático desde el directorio 'public'
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
  res.render('home', { // estos son los argumentos
    nombre: ' JHONATAN SH',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: ' JHONATAN SH',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: ' JHONATAN SH',
    titulo: 'Curso de Node'
  });
});

// Ruta para manejar cualquier otra solicitud y enviar un archivo 404.html
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
