const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Person', PersonSchema);