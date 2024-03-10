const mongoose = require('mongoose');

const AddpersonSchema =  mongoose.Schema({
    email:{
        type : String,
        required : true
    }
});

module.exports = mongoose.model('addperson',AddpersonSchema);