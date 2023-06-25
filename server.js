const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const DB_URl = process.env.DB_URl;
const app = express();

//midleware

mongoose
  .connect(DB_URl, {
    useNewUrlParser: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected To Database");
  })
  .catch((err) => {
    console.error("Error Connecting ", err);
  });

app.listen(port, (req, res, nect) => {
  console.log(`server is listening on ${port}`);
  //console.log('connected to
});

app.get("/", (req, res, next) => {
  res.send("Server Is running ,Now you can make Dynamic web App");
});
