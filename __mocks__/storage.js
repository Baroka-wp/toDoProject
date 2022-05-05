const taskList = { id: 1, description: 'My old task', completed: false };

const setItems = (obj) => taskList.push(obj);

const getItems = () => taskList;

exports.setItems = setItems;
exports.getItems = getItems;
