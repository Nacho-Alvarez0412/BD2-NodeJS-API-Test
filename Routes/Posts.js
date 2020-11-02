const express = require('express');
const router = express.Router(); //Módulo que permite realizar redirecciones 
const Post = require('../Models/Post');
const User = require('../Models/User');


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
        const post = await Post.find();
        res.json(post);
    } catch (error) {
        res.json({message : error});
    }

});

//GET WITH PARAMETERS
router.get ('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
    } catch (error) {
        res.json({message : error});
    }

});

//POST
router.post ('/',async (req,res) => {

    /*Estructura schema User
    {username : string , password : string , name : string}
    */

    //Existe el usuario ?
    const user = await User.find({username : req.body.user});
    

    if (user.length == 0){
        const NewUser = new User({
            username : req.body.user ,
            password : "1234",
            name : req.body.user
        })
        try {
            await NewUser.save();    
        } catch (error) {
            res.json({message : error});
        }
    }

    const post = new Post({
        title : req.body.title ,
        description : req.body.description,
        user : req.body.user
    })
    
    try {

        const savedPost = await post.save();
        res.json(savedPost)

    } catch (error) {

        res.json({message : error});
    }

});

//DELETE
router.delete ('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id : req.params.postID});
        res.json(removedPost);
    } catch (error) {
        res.json({message : error});
    }

});

//UPDATE
router.patch ('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id : req.params.postID},{$set : {title : req.body.title}});
        res.json(updatedPost);
    } catch (error) {
        res.json({message : error});
    }

});



module.exports = router; //Es necesario esta instrucción para exportar el router a otras apps