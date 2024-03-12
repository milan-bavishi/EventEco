const mongoose = require('mongoose');

const addauthoritiesSchema = mongoose.Schema({
    
    eventName: {
        type: String,
        require: true
    },
    id: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('authorities', addauthoritiesSchema);
