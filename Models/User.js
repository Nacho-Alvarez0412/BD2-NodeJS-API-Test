const moongose = require('mongoose')

const UserSchema = moongose.Schema({
    username : {
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    name : {
        type : String ,
        required : true
    }
});

module.exports = moongose.model('Users', UserSchema); //name and schema to use