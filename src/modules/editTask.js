import { getItems, setItems } from './storage.js';
import deleteTask from './deleteTask.js';

const editTask = (event) => {
  let index = event.target.parentElement.classList[0];
  index = parseInt(index, 10);
  const taskList = getItems();
  taskList.forEach((item) => {
    if (item.id === index) {
      if (event.target.value.length >= 1) {
        item.description = event.target.value;
        setItems(taskList);
      }
      if (event.target.value.length === 0) {
        const isconfirm = window.confirm('do you whant to delete the task ?');
        if (isconfirm) {
          deleteTask(index);
          event.target.parentElement.remove();
        }
        window.location.reload();
      }
    }
  });
};

export default editTask;
