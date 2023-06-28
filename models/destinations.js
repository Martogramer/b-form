const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        }
    ],
    sellerName: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientLastName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    companySize: {
        type: String,
        required: true
    },
    specifications: {
        type: String,
        required: true
    },
    checkboxValue: {
        type: String,
        enum: ['option1', 'option2', 'option3'],
        required: true
    }
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;