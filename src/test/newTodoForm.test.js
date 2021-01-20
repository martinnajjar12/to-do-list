import todoForm from '../scripts/newTodoForm';

describe('todoForm', () => {
  it('returns a HTML Object', () => {
    expect(typeof todoForm).toBe('object');
  });
});
