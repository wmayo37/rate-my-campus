const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  text: String,
  rating: { type: Number, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
});

const PlaceSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  reviews: [ReviewSchema],
});

const PlaceModel = mongoose.model("places", PlaceSchema);
module.exports = PlaceModel;
