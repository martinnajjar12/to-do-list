import Project from '../scripts/project';

describe('Project class', () => {
  const myProject = new Project('test');
  it('s instances have a name', () => {
    expect(myProject.name).toEqual('test');
  });

  it('s instances should have correct name', () => {
    expect(myProject.name).not.toEqual('not correct');
  });

  it('s intances has an empty array', () => {
    expect(myProject.todos).toEqual([]);
  });

  it('s intances should be an empty array', () => {
    expect(myProject.todos).not.toEqual([1, 2, 3]);
  });
});
