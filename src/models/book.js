const mongo = require('mongoose');

const bookShema = new mongo.Schema({
    heading:{
        type: String,
        required: true,
        minLength: 2,
    },
    author:{
        type:String,
        required: true,
        minLength: 2,
    },
    date:{
        type: Number,
        required: true,
    }
})

module.exports = mongo.model('book', bookShema); 