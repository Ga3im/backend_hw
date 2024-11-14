const mongo = require('mongoose');

const userShema = new mongo.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
    },
    lastname:{
        type:String,
        required: true,
        minLength: 2,
    },
    username:{
        type: String,
        required: true,
        minLength: 5,
    }
})

module.exports = mongo.model('user', userShema)