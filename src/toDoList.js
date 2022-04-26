export default class ToDoList {
  constructor() {
    this.id = "";
    this.description = "";
    this.completed = false;
  }

  static getAllTask() {
    const taskList = JSON.parse(localStorage.getItem('taskList') || '[]');
    return taskList;
  }

  static addTask(newTask) {
    const taskList = ToDoList.getAllTask();
    const tasks = document.querySelector('.taskList')

    newTask.id = taskList.length + 1 || 1
    taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(taskList));

    const li = document.createElement('li');
    li.innerHTML = `
        <input class="checkbox" type="checkbox">
        <p>${newTask.description}</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
    tasks.prepend(li)
  }


  static displayTaskList() {
    const taskList = ToDoList.getAllTask();
    taskList.sort((a,b) =>{ return b.id - a.id })
            .forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
          <input class="checkbox" type="checkbox">
          <p>${task.description}</p>
          <i class="fa-solid fa-ellipsis-vertical"></i>
      `;
      document.querySelector('.taskList').appendChild(li);
    })
  }


}
