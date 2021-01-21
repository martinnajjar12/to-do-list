import newProjectForm from '../scripts/newProjectForm';

describe('newProjectForm', () => {
  it('returns a HTML Object', () => {
    expect(typeof newProjectForm).toBe('object');
  });

  it('should not be array', () => {
    expect(typeof newProjectForm).not.toBe('array');
  });
});
