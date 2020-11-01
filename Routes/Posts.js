const express = require('express');
const router = express.Router(); //Módulo que permite realizar redirecciones 
const Post = require('../Models/Post')

//ROUTES : 
//localhost:3000/post <- Ejemplo de ruta
/*
get = SELECT
post = INSERT 
delete = DELETE
patch = UPDATE

*/ 

router.get ('/', (req, res) => {
    //console.log(req.body);          
    //res.send({message : 'pura vida bro', nombre : 'Ignacio'});

});

router.post ('/',(req,res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    post.save();  // Métodos de moongose para guardar
    res.sendStatus(200);
});

/*
router.get ('/specific', (req, res) => {
    console.log(req.body);          
    res.send({message : 'specific', nombre : 'Diego'});
});
*/



module.exports = router; //Es necesario esta instrucción para exportar el router a otras apps