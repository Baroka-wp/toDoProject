import addTask from '../modules/addTask.js';
const taskList = [{ id: 1, description: 'My old task', completed: false }];
describe('Add new task to storage', () => {
  test('chech new task added properly in taskList', () => {
    const newTask = { description: 'My new task' };
    addTask(taskList, newTask);
    expect(taskList.pop().description).toBe('My new task');
  });
  test('check completed is false by default', () => {
    const newTask = { description: 'My new task' };
    addTask(taskList, newTask);
    expect(taskList.pop().completed).toBe(false);
  });
  test('check Id is order from 1', () => {
    const newTask = { description: 'new task' };
    addTask(taskList, newTask);
    addTask(taskList, newTask);
    expect(taskList.pop().id).toBe(3);
    expect(taskList.shift().id).toBe(1);
  });
});
