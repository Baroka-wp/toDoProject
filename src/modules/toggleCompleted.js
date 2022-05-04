import { getItems, setItems } from './storage.js';

const toggleCompleted = (event) => {
  let index = event.target.parentElement.classList[0];
  index = parseInt(index, 10);
  const taskList = getItems();

  taskList.forEach((item) => {
    if (item.id === index) {
      if (event.target.checked) {
        item.completed = true;
      } else if (!event.target.checked) {
        item.completed = false;
      }
      setItems(taskList);
    }
  });
};

const clearAllComplete = () => {
  const taskList = getItems();
  const newTaskList = taskList.filter((item) => item.completed === false);
  setItems(newTaskList);
  window.location.reload();
};

export { toggleCompleted, clearAllComplete };
