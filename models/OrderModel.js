const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        default: null
    },
    userId : {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Orders', orderSchema);