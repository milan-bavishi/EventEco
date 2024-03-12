const mongoose = require('mongoose');

const registerEvent = mongoose.Schema({
    
    organizerName: {
        type: String,
        require: true
    },
    eventName: {
        type: String,
        require: true
    },
    organizerEmail: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    Date: {
        type: String,
        require: true
    },
    categories: {
        type: String,
        require: true
    },
    venue: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    id:{
        type : Number,
        required : true
    },
    joinedAt: {
        type: Date,
        default: Date.now()
    },
    id:{
        type : Number,
        required : true
    }
});

module.exports = mongoose.model('registerEvent', registerEvent);
