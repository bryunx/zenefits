function enter_task () {
        var text = $('#enter_task').val();
        $('#todo_list').append('<ul>'+ text + ' <input type="submit" class="edit" value="Edit">' + '<input type="submit" class="done delete" value="Delete">' +'</ul>');
};

$('#todo_list').on('click', '.edit', function(){
    $(this).parent().attr('contenteditable','true');
});

$('#todo_list').on('click', '.delete',function(){
    $(this).parent().remove();
});

$(function() {
    $('#add').on('click', enter_task);
});

document.onkeydown = function (e) {

	if(e.keyCode == 13) {
		e.preventDefault();
		enter_task ();
	}
};

angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [];
 
 	todoList.getTotalTodos = function () {
 		return $scope.todos.length;
 	};

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
});