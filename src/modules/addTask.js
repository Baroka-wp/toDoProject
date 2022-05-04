const addTask = (taskList, obj) => {
  obj.id = taskList.length + 1 || 1;
  obj.completed = false;
  taskList.push(obj);
  return taskList
};

export default addTask;
