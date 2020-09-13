$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos)

    $('#todoInput').keypress(function(event){
        if(event.which == 13) {
            createTodo();
        }
    });

    $('.list').on('click', 'span', function(){
        removeTodo($(this).parent())
    })
});

// this is the function to add todos to the page
function addTodos(todos) {
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

// adding an individual todo
function addTodo(todo) {
    var newTodo = $('<li class="task">'+todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id)
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}
// this is the function to send requests to create new todo
function createTodo(){
    var userInput = $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        $('#todoInput').val('');
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

// this is the function to send requests to delete a todo
function removeTodo(todo){
    var clickedID = todo.data('id');
    var deleteURL = '/api/todos/' + clickedID;
    $.ajax({
        method: 'DELETE',
        url: deleteURL
    })
    .then(function(data){
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    })
}