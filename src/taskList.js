class TaskList {
  constructor(){
    this.tasks = [];
  }

  createNewTask(description) {
    const newTask = new task(description);
    this.tasks.push(newTask);
  }

  renderTask() {
    return this.task.map((task) => task.render()).join("");
  }

  deleteTask(description) {
    this.tasks = this.tasks.filter((task) => task.description !== description)
  }
}