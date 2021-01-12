require('./css/styles.css');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const todoForm = require('./scripts/newTodoForm');

let projects = [];

const container = document.querySelector('.container');
container.appendChild(projectForm);
container.appendChild(todoForm);

const projectName = document.querySelector('#projectName');
const createBtn = document.querySelector('#createBtn');
const row = document.createElement('div');
row.className = 'row';
container.appendChild(row);

const createProject = (name) => {
  const newProject = new project(name);
  projects.push(newProject);
  console.log(projects);
  row.appendChild(projectCard(newProject.name));
  saveLocal();
};

createBtn.addEventListener('click', () => createProject(projectName.value));

const resetRow = () => {
  const row = document.querySelector('.row');
  row.innerHTML = '';
};

function saveLocal() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function restoreLocal() {
  projects = JSON.parse(localStorage.getItem('projects'));
  if (projects === null) {
    projects = [];
    createProject('default');
  } else {
    resetRow();
    projects.forEach((project) => {
      const newProject = projectCard(project.name);
      row.appendChild(newProject);
    });
  }
}

console.log(new Date());

restoreLocal();
