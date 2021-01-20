import editTodo from '../scripts/editTodo';

describe('editTodo', () => {
  it('should return a HTML Object', () => {
    expect(typeof editTodo).toBe('object');
  });
});
