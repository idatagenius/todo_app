var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    // Name = String
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    // Completed = Boolean
    completed: {
        type: Boolean,
        default: false
    },
    // Created Date = Date
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;