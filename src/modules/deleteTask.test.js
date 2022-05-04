import deleteTask from './deleteTask.js';
import addTask from './addTask.js';

let taskList = [
  { id: 1, description: 'task 1', completed: false },
  { id: 2, description: 'task 2', completed: false },
  { id: 3, description: 'task 3', completed: false },
  { id: 4, description: 'task 4', completed: false },
];

describe('delete task from storage', () => {
  taskList = deleteTask(taskList, 2);
  test('check if task deleted', () => {
    expect(taskList.length).toBe(3);
  });
  test('check if task reorder after deleted', () => {
    expect(taskList[0].id).toBe(1);
    expect(taskList[2].id).toBe(3);
  });
  test('check if after delete task, new task id to equal last id + 1', () => {
    const newTask = { description: 'My new task' };
    addTask(taskList, newTask);
    expect(taskList[3].id).toBe(4);
  });
});
