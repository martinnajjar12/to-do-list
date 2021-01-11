require('./css/styles.css');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const { querySelector } = require('./scripts/newProjectForm');

const container = document.querySelector('.container');

container.appendChild(projectForm);

const projectName = document.querySelector('#projectName');
const createBtn = document.querySelector('#createBtn');

// const to = new todo('Todo', 'description', '11,01,2021', 't', 'notes');
createBtn.addEventListener('click', () => {
  const newProject = new project(projectName.value);
  container.appendChild(projectCard(newProject.name));
});


// const cardTitle = document.querySelector('.cardTitle');
// cardTitle.textContent = p.name;

// const ul = document.querySelector('.todos');
// const todoLi = document.createElement('li');
// todoLi.textContent = to.title;
// ul.appendChild(todoLi);
