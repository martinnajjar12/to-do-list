require('./css/styles.css');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');

const to = new todo('Todo', 'description', '11,01,2021', 't', 'notes');
const p = new project('Test');

const cardTitle = document.querySelector('.cardTitle');
cardTitle.textContent = p.name;

const ul = document.querySelector('.todos');
const todoLi = document.createElement('li');
todoLi.textContent = to.title;
ul.appendChild(todoLi);
