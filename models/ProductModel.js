const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        default: null
    },
    weight: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);