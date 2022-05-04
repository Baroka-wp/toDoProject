var taskList = {id:1, description:"My old task", completed:false}

const setItems = (obj) => {
  return taskList.push(obj);
};

const getItems = () => {
  return taskList;
};

exports.setItems = setItems;
exports.getItems = getItems;
