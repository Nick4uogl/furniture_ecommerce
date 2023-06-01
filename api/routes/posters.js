const express = require("express");
const router = express.Router();

const getPosters = require("../controllers/posters.js");

router.route("/").get(getPosters);

module.exports = router;
