require('./css/styles.css');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const todoForm = require('./scripts/newTodoForm');
const { DOCUMENT_NODE } = require('./scripts/newProjectForm');

let projects = [];
const projectNameArray = [];

const container = document.querySelector('.container');
container.appendChild(projectForm);
container.appendChild(todoForm);

const projectName = document.querySelector('#projectName');
const createProjectBtn = document.querySelector('#createProjectBtn');
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

const todoTitle = document.querySelector('#todoTitle');
const todoDesc = document.querySelector('#todoDesc');
const todoDate = document.querySelector('#todoDate');
const todoPriority = document.querySelector('#todoPriority');
const todoProject = document.querySelector('#todoProjectSelection');
const todoNotes = document.querySelector('#todoNotes');
const createTodoBtn = document.querySelector('#createTodoBtn');

const createTodo = () => {
  const newTodo = new todo(
    todoTitle.value,
    todoDesc.value,
    todoDate.value,
    todoPriority.value,
    todoNotes.value
  );
  projects[projectNameArray.indexOf(todoProject.value)].todos.push(newTodo);
};

createProjectBtn.addEventListener('click', () => {
  createProject(projectName.value);
});

createTodoBtn.addEventListener('click', () => {
  createTodo();
});

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

restoreLocal();
projects.forEach((project) => {
  projectNameArray.push(project.name);
});
