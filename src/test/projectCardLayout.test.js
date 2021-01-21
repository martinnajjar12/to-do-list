import projectCard from '../scripts/projectCardLayout';

describe('project card', () => {
  it('is type of a function', () => {
    expect(typeof projectCard).toEqual('function');
  });

  it('is not a class', () => {
    expect(typeof projectCard).not.toEqual('class');
  });
});
