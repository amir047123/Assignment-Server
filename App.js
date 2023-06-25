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
    console.log("Connected to MongoDB Database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/dishes", dishRouter); // Use dishRouter for '/dishes' endpoint
app.use("/promotions", promoRouter); // Use promoRouter for '/promotions' endpoint
app.use("/leaders", leaderRouter); // Use leaderRouter for '/leaders' endpoint

// Default route
app.get("/", (req, res) => {
  res.send("Server is running. Now you can check the REST API.");
});

module.exports = app;
