import Todo from '../scripts/todoClass';

describe('todo instances', () => {
  const myTodo = new Todo(
    'test',
    'to test the class',
    '12-12-2020',
    'High',
    'myNote',
    'default',
    true,
  );
  it('s instances has a title', () => {
    expect(myTodo.title).toBe('test');
  });

  it('s instances has a description', () => {
    expect(myTodo.description).toBe('to test the class');
  });

  it('s instances has a date', () => {
    expect(myTodo.date).toBe('2020-12-12');
  });

  it('s instances has a priority', () => {
    expect(myTodo.priority).toBe('High');
  });

  it('s instances has a note', () => {
    expect(myTodo.notes).toBe('myNote');
  });

  it('s instances has a project', () => {
    expect(myTodo.project).toBe('default');
  });

  it('s instances has a boolean whether it is done or not', () => {
    expect(myTodo.finished).toBeTruthy();
  });
});
