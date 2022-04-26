import { getItems } from './storage.js';
import createLi from './createElement.js';

const loadTaskList = () => {
  const taskList = getItems();
  taskList.sort((a, b) => b.id - a.id)
    .forEach((task) => {
      createLi(task);
    });
};
export default loadTaskList;
