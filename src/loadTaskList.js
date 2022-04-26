import { getItems } from './storage.js';

const loadTaskList = () => {
  const taskList = getItems();
  taskList.sort((a, b) => b.id - a.id)
    .forEach((task) => {
      const li = document.createElement('li');
      li.classList.add(+task.id);
      li.innerHTML = `
        <input class="checkbox" type="checkbox">
        <p>${task.description}</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
      document.querySelector('.taskList').appendChild(li);
    });
};
export default loadTaskList;
