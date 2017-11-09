class HomeController {
  constructor() {
    this.todos = [
      {item: 'learn angular', completed: false},
      {item: 'attempt next lesson', completed: false},
      {item: 'figure out what I am doing wrong', completed: false},
    ];
  }

  addTodo(){
    this.todos.push({'item': this.newTodo, 'completed': false});
    this.newTodo = "";
    console.log(`I have to do this next: ${this.newTodo}`);

  }

  clearList(){
    this.todos = this.todos.filter(function(item){
      return !item.completed
    })
  }

}

angular.module('ToDoApp').controller('HomeController');
