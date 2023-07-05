const mongoose = require("mongoose");

const TechnologySchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: true,
        required: true,
    },
});

module.exports = mongoose.model('Technology', TechnologySchema);