const express = require("express");
require("dotenv").config();
const app = express();

//routers
const ordersRouter = require("./routes/orders.js");
const postersRouter = require("./routes/posters.js");
const productsRouter = require("./routes/products.js");

//middlewares
const notFoundMiddleware = require("./middleware/not-found.js");
const errorMiddleware = require("./middleware/error-handler.js");

const connectDB = require("./db/connect.js");

app.use(express.static("public"));
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use("/orders", ordersRouter);
app.use("/posters", postersRouter);
app.use("/products", productsRouter);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("server started");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
