const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
} = require("../controllers/products.js");

router.route("/").get(getProducts);
router.route("/").post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;
