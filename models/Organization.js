const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: true,
        required: true,
    },
});

module.exports = mongoose.model('Organization', OrganizationSchema);