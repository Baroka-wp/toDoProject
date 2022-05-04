import addTask from './addTask.js';
import createLi from './createElement.js';

const addTasktoDom = (taskList,newTask) => {
  const updatedList = addTask(taskList,newTask);
  createLi(newTask);
  return updatedList
};

export default addTasktoDom;
