// Imports
const express = require('express'); // Express es un modulo que permite la creación de rutas
const mongoose = require ('mongoose'); // Módulo que permite realizar conexiones con Bases de Datos Mongo
const cors = require('cors');
require('dotenv/config');

// Disfrazamos la constante express por app para darle legibilidad al código
const app = express();

//Middleware 

app.use(cors());

app.use(
    express.urlencoded({
        extended : true
    })
);
app.use(express.json());



// imports ROUTES 
const postRoute = require('./Routes/Posts');
const userRoute = require('./Routes/Users');


app.use('/posts',postRoute)
app.use('/users',userRoute)




mongoose.connect(process.env.DB_CONNECTION,
                    {useUnifiedTopology : true, useNewUrlParser : true},
                    () => {console.log( 'connected to DB!!')}
);




// Server listening in port 3000
app.listen(3000);

