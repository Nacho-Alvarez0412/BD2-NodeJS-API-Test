// Imports
const express = require('express'); // Express es un modulo que permite la creación de rutas

// Disfrazamos la constante express por app para darle legibilidad al código
const app = express();




//ROUTES : 
//localhost:3000/post <- Ejemplo de ruta

app.get ('/', (req, res) => {
    res.send('Hola todos estamos en el home guapos');
});

app.get ('/posts', (req, res) => {
    res.send({message : 'pura vida bro', nombre : 'Ignacio'});
});

// Server listening in port 3000
app.listen(3000);

