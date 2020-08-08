var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require('../helpers/todos')

// Get all of the todos and create a todo
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

// get an individual todo, updating a todo, and deleting a todo
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;