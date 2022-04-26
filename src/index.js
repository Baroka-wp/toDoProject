import './style.css';
import ToDoList from './ToDoList.js';

ToDoList.displayTaskList();

const list = new ToDoList();
const addToDo = document.querySelector('.addToDo');
const form = document.querySelector('form');
const taskList = document.querySelectorAll('.taskList li p');
// const grabIcone = document.querySelector('.fa-ellipsis-vertical')

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    ToDoList.addTask({ description: addToDo.value });
    addToDo.value = '';
  }
});

taskList.forEach((task) => {
  task.addEventListener('click', (e) => {
    const element = e.target.parentElement.querySelector('i');
    element.classList.toggle('fa-trash-can');
    element.classList.toggle('fa-ellipsis-vertical');
    task.classList.toggle('active');

    document.querySelector('.fa-trash-can')
      .addEventListener('click', (e) => {
        const index = e.target.parentElement.classList[0];
        const id = parseInt(index);
        ToDoList.deleteTask(id);
        e.target.parentElement.remove();
      });
  });
});
