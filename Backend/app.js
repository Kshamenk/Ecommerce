const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const mainRouter = require("./src/routes/mainRouter");
const app = express();
const mercadopago = require("mercadopago");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const accessToken = process.env.ACCESS_TOKEN;

const secretJWT= process.env.JWT_SECRET;
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(mainRouter);

mercadopago.configure({
  access_token: accessToken,
});

app.post("/admin-login", (req, res) => {
  const { email, password } = req.body;
  const isAuthenticated = true;
  if (isAuthenticated) {
    const token = jwt.sign({ email, role: "admin" }, secretJWT, {
      expiresIn: "1h",
    });
    res.json({ token });
  }
});

app.post("/create_preference", (req, res) => {
  const products = req.body;
  const items = products.map(({ title, price, quantity }) => ({
    title,
    unit_price: Number(price),
    quantity: Number(quantity),
  }));
  let preference = {
    items,
    back_urls: {
      success: "http://localhost:3000",
      failure: "http://localhost:3000",
      pending: "http://localhost:3000",
    },
    auto_return: "approved",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = app;

