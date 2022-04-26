import { getItems, setItems } from './storage.js';

const editTask = (index, event) => {
  const taskList = getItems();
  taskList.forEach((item) => {
    if (item.id === index) {
      item.description = event.target.value;
      setItems(taskList);
    }
  });
};

export default editTask;
