const stripe = require("stripe")(
  "sk_test_51ND7xWDLWL19aWHbcOlpZLQowaVu0W8AiZ8XBMqR9t8wOpIbBZdseklBYR09fstAAGFZr4QwUJHjE57zEhsl6Q3j00ixlhfcdY"
);
const Order = require("../models/Order.js");
const Product = require("../models/Product.js");

const clientDomain = `http://localhost:3001`;

const createOrder = async (req, res) => {
  const data = req.body;

  const lineItems = await Promise.all(
    data.products.map(async (item) => {
      const product = await Product.findOne({ _id: item.id });
      return {
        price_data: {
          currency: "uah",
          product_data: {
            name: product.name,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: item.count,
      };
    })
  );
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${clientDomain}/success`,
      cancel_url: `${clientDomain}/canceled`,
      payment_method_types: ["card"],
    });

    await Order.create({ products: data.products, stripe_id: session.id });

    return res.status(201).json({ session_id: session.id });
  } catch (err) {
    res.status(500);
    return err;
  }

  res.redirect(303, session.url);
};

module.exports = createOrder;
