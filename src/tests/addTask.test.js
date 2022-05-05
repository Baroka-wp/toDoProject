import addTask from '../modules/addTask.js';
const taskList = [{ id: 1, description: 'My old task', completed: false }];
const newTask = { description: 'My new task' };

describe('Add new task to storage', () => {
  test('chech new task added properly in taskList', () => {
    addTask(taskList, newTask);
    expect(taskList.pop().description).toBe('My new task');
  });
  test('check completed is false by default', () => {
    addTask(taskList, newTask);
    expect(taskList.pop().completed).toBe(false);
  });
  test('check Id is order from 1', () => {
    addTask(taskList, newTask);
    addTask(taskList, newTask);
    expect(taskList[2].id).toBe(3);
    expect(taskList[0].id).toBe(1);
  });
});
