const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});
