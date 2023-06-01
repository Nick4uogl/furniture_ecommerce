const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  discount: {
    type: Number,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    trim: true,
  },
  bought: {
    type: Boolean,
    trim: true,
  },
  characteristics: Array,
});

module.exports = mongoose.model("product", ProductSchema);
