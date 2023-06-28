const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    
    nameSeller: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    enterprice: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        enum: ['option1', 'option2', 'option3'],
        required: false
    }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;