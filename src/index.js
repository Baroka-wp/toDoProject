import './style.css';
import ToDoList from './ToDoList.js';

ToDoList.displayTaskList();


let list = new ToDoList
const addToDo = document.querySelector('.addToDo')
const form = document.querySelector('form')

form.addEventListener('keypress', (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    ToDoList.addTask({description: addToDo.value});
    addToDo.value = ''
  }
})
