import todoForm from '../scripts/newTodoForm';

describe('todoForm', () => {
  it('returns a HTML Object', () => {
    expect(typeof todoForm).toBe('object');
  });

  it('should not be a class', () => {
    expect(typeof todoForm).not.toBe('class');
  });

  it('should not be a array', () => {
    expect(typeof todoForm).not.toBe('array');
  });
});
