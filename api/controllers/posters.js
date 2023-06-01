const Poster = require("../models/Poster.js");

const getPosters = async (req, res) => {
  const posters = await Poster.find({});
  res.status(201).json({ posters });
};

module.exports = getPosters;
