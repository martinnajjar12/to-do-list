import Project from '../scripts/project';

describe('Project class', () => {
  const myProject = new Project('test');
  it('s instances have a name', () => {
    expect(myProject.name).toEqual('test');
  });

  it('s intances has an empty array', () => {
    expect(myProject.todos).toEqual([]);
  });
});
