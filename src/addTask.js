import { setItems, getItems } from './storage.js';

const addTask = (obj) => {
  const taskList = getItems();
  obj.id = taskList.length + 1 || 1;
  obj.completed = false;
  taskList.push(obj);
  setItems(taskList);
};

export default addTask;
