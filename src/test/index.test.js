import createProject from '../index';
import projects from '../index';

describe('createProject function', () => {
  // it('creates a new instance of Project class and save it to the projects array', () => {
  //   expect(typeof createProject('forTest')).toBe('object');
  // });

  it('creates a new instance of Project class and save it to the projects array', () => {
    // console.log(projects);
    const container = document.querySelector('.container');
    expect(createProject('forTest')).toBe('object');
  });
});
