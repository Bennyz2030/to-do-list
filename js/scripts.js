function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for ToDoList

function Task(dateAdded, newTask, completeByDate) {
  this.dateAdded = dateAdded;
  this.newTask = newTask;
  this.completeByDate = completeByDate;
}

