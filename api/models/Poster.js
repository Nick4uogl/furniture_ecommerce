const mongoose = require("mongoose");

const PosterSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("poster", PosterSchema);
