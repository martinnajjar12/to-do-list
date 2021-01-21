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

  it('instances should not have random title', () => {
    expect(myTodo.title).not.toBe('asdfa');
  });

  it('s instances has a description', () => {
    expect(myTodo.description).toBe('to test the class');
  });

  it('s instances should not have random description', () => {
    expect(myTodo.description).not.toBe('this is a desc');
  });

  it('s instances has a date', () => {
    expect(myTodo.date).toBe('2020-12-12');
  });

  it('s instances should have correct date format', () => {
    expect(myTodo.date).not.toBe('12-12-2020');
  });

  it('s instances has correct priority', () => {
    expect(myTodo.priority).toBe('High');
  });

  it('s instances should not be other than low medium high', () => {
    expect(myTodo.priority).not.toBe('Difficult');
  });

  it('s instances has a note', () => {
    expect(myTodo.notes).toBe('myNote');
  });

  it('s instances has incorrect note', () => {
    expect(myTodo.notes).not.toBe('Not My Notes');
  });

  it('s instances has a project', () => {
    expect(myTodo.project).toBe('default');
  });

  it('s instances should be in correct project', () => {
    expect(myTodo.project).not.toBe('other');
  });

  it('s instances has a boolean whether it is done or not', () => {
    expect(myTodo.finished).toBeTruthy();
  });

  it('s instances has a boolean whether it is done or not', () => {
    expect(myTodo.finished).not.toBeFalsy();
  });
});
