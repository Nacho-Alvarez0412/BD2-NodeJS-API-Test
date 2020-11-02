const moongose = require('mongoose')

const PostSchema = moongose.Schema({
    title : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true
    },
    date : {
        type : Date ,
        default : Date.now
    },
    user : {
        type : String,
        required : true
    }
});

module.exports = moongose.model('Posts', PostSchema); //name and schema to use