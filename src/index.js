
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');

// function initialize() {
//   if (project) {
//   }
// }

const to = new todo('Todo', 'description', '11,01,2021', 't', 'notes');
const p = new project('Test');

p.addTodo(to);

const doc = document.querySelector('#content');
doc.textContent = p.todos[0].title;