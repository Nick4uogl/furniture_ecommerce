const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  stripe_id: {
    type: String,
    required: true,
    trim: true,
  },
  products: Array,
});

module.exports = mongoose.model("order", OrderSchema);
