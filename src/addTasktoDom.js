import addTask from './addTask.js';

const addTasktoDom = (newTask) => {
  addTask(newTask);
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const p = document.createElement('p');
  const i = document.createElement('i');
  p.innerHTML = `${newTask.description}`;
  checkbox.type = 'checkbox';
  i.classList.add('fa-solid', 'fa-ellipsis-vertical');
  li.classList.add(+newTask.id);
  li.append(checkbox, p, i);
  document.querySelector('.taskList').prepend(li);
  p.addEventListener('click', () => {
    i.classList.toggle('fa-trash-can');
    i.classList.toggle('fa-ellipsis-vertical');
    li.classList.toggle('active');
  });
};

export default addTasktoDom;
