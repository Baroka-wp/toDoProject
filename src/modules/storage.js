const setItems = (obj) => {
  localStorage.setItem('taskList', JSON.stringify(obj));
};

const getItems = () => {
  const taskList = JSON.parse(localStorage.getItem('taskList') || '[]');
  return taskList;
};

export { setItems, getItems };
