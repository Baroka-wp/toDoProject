import addTask from './addTask.js';
import createLi from './createElement.js';

const addTasktoDom = (newTask) => {
  addTask(newTask);
  createLi(newTask);
};

export default addTasktoDom;
