const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Events', eventSchema);
