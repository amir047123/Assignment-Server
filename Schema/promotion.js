const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
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
  description: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;
