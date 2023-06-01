const Product = require("../models/Product.js");

const getProducts = async (req, res) => {
  let allProducts = [];
  const query = req.query;
  if (query.type) {
    allProducts = await Product.find({ type: query.type });
  } else {
    allProducts = await Product.find({});
  }
  let isLast = false;
  const pagesCount = Math.ceil(allProducts.length / 6);

  const page = Number(query.page) || 0;
  const limit = Number(query.limit) || 6;
  let products = [];

  if (query.bought) {
    products = await Product.find({ bought: true }).limit(10);
    return res.status(201).json({ products });
  }

  if (page === 0) {
    if (query.type) {
      products = await Product.find({ type: query.type }).limit(6);
    } else {
      products = await Product.find({}).limit(6);
    }
    if (products.length === allProducts.length) {
      isLast = true;
    }
  } else {
    const productsToSkip = 6 + page * limit - limit;
    if (query.type) {
      products = await Product.find({ type: query.type })
        .skip(productsToSkip)
        .limit(limit);
    } else {
      products = await Product.find({}).skip(productsToSkip).limit(limit);
    }
    if (productsToSkip + products.length === allProducts.length) {
      isLast = true;
    }
  }

  res.status(201).json({ products, last: isLast, pages: pagesCount });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json({ product });
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

module.exports = { getProducts, getProduct, createProduct };
