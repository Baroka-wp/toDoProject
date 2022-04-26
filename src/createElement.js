const createLi = (obj) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('input');
  const i = document.createElement('i');
  description.type = 'text';
  description.value = `${obj.description}`;
  description.desabled = true;
  checkbox.type = 'checkbox';
  i.classList.add('fa-solid', 'fa-ellipsis-vertical');
  li.classList.add(obj.id);
  li.append(checkbox, description, i);
  document.querySelector('.taskList').prepend(li);
  if (obj.completed) {
    checkbox.checked = true;
    li.classList.add('checked');
  }
};

export default createLi;
