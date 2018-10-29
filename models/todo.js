const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("debug", true);

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true }
);

var todoSchema = new mongoose.Schema({
  todo: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
