import editTodo from '../scripts/editTodo';

describe('editTodo', () => {
  it('should return a HTML Object', () => {
    expect(typeof editTodo).toBe('object');
  });

  it('should not be array', () => {
    expect(typeof editTodo).not.toBe('array');
  });
});
