import './style.css';
import deleteTask from './deleteTask.js';
import addTasktoDom from './addTasktoDom.js';
import loadTaskList from './loadTaskList.js';

loadTaskList();

const addToDo = document.querySelector('.addToDo');
const form = document.querySelector('form');
const taskList = document.querySelectorAll('.taskList li p');

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTasktoDom({ description: addToDo.value });
    addToDo.value = '';
  }
});

taskList.forEach((task) => {
  task.addEventListener('click', (e) => {
    const element = e.target.parentElement.querySelector('i');
    element.classList.toggle('fa-trash-can');
    element.classList.toggle('fa-ellipsis-vertical');
    e.target.parentElement.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.fa-trash-can')) {
    const index = e.target.parentElement.classList[0];
    const id = parseInt(index, 10);
    deleteTask(id);
    e.target.parentElement.remove();
  }
});
