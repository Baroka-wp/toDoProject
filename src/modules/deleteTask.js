import reorder from './reorder.js';

const deleteTask = (taskList,index) => {
  const newTaskList = taskList.filter((task) => task.id !== index);
  const orderedTaskList = reorder(newTaskList);
  return orderedTaskList;
};

export default deleteTask;
