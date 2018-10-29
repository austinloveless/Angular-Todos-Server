var Todo = require("../models/todo");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  Todo.find()
    .then(function(todo) {
      res.json(todo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/:todoId", (req, res) => {
  Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
      res.json(foundTodo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put("/:todoId", (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, {
    new: true
  })
    .then(function(todo) {
      res.json(todo);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/:todoId", (req, res) => {
  Todo.remove({ _id: req.params.todoId })
    .then(function() {
      res.json({ message: "deleted" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
