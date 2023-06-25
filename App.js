const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const dishRouter = require("./Routes/dishRouter");
const promoRouter = require("./Routes/promoRouter");
const leaderRouter = require("./Routes/leaderRouter");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);

app.get("/", (req, res) => {
  res.send("Server is a Running .Now You Can Check RestApi");
});

module.exports = app;
