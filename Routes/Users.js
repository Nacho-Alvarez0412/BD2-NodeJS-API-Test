const express = require('express');
const router = express.Router(); //Módulo que permite realizar redirecciones 
const User = require('../Models/User')

//ROUTES : 
//localhost:3000/post <- Ejemplo de ruta
/*
get = SELECT
post = INSERT 
delete = DELETE
patch = UPDATE

*/ 
//GET ALL
router.get ('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.json({message : error});
    }

});

//GET WITH PARAMETERS
router.get ('/:userID', async (req, res) => {
    try {
        const user = await User.findById(req.params.userID);
        res.json(user);
    } catch (error) {
        res.json({message : error});
    }

});

//POST
router.post ('/',async (req,res) => {

    const user = new User({
        username : req.body.username ,
        password : req.body.password,
        name : req.body.name
    })
    
    try {

        const savedUser = await user.save();
        res.json(savedUser)

    } catch (error) {

        res.json({message : error});
    }

});

//DELETE
router.delete ('/:userID', async (req, res) => {
    try {
        const removedUser = await User.remove({_id : req.params.userID});
        res.json(removedUser);
    } catch (error) {
        res.json({message : error});
    }

});

//UPDATE
router.patch ('/:userID', async (req, res) => {
    try {
        const updatedUser = await User.updateOne({_id : req.params.userID},{$set : {username : req.body.username , password : req.body.password}});
        res.json(updatedUser);
    } catch (error) {
        res.json({message : error});
    }

});



module.exports = router; //Es necesario esta instrucción para exportar el router a otras apps