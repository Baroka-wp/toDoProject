import './style.css';
import ToDoList from './toDoList.js';

ToDoList.displayTaskList();

const addToDo = document.querySelector('.addToDo');
const form = document.querySelector('form');

form.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    ToDoList.addTask({ description: addToDo.value });
    addToDo.value = '';
  }
});
