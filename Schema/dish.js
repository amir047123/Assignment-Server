const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  label: {
    type: String,
    default: "",
  },
  price: {
    type: Number,

    min: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
