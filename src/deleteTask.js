import { setItems, getItems } from './storage.js';
import reorder from './reorder.js';

const deleteTask = (index) => {
  const taskList = getItems();
  const newTaskList = taskList.filter((task) => task.id !== index);
  reorder(newTaskList);
  setItems(newTaskList);
};

export default deleteTask;
