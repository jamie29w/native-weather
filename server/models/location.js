const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newLocation = new Schema({
    longitude: String,
    latitude: String
}, { timestamps: true });

module.exports = mongoose.model("Location" newLocation);
