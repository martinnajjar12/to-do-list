require('./css/styles.css');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const todoForm = require('./scripts/newTodoForm');

let projects = [];
const projectNameArray = [];

// Container
const container = document.querySelector('.container');
const projectModal = document.createElement('button');
const todoModal = document.createElement('button');

projectModal.setAttribute('type', 'button');
projectModal.className = 'project-modal-btn';
projectModal.textContent = 'Create Project';

todoModal.setAttribute('type', 'button');
todoModal.className = 'todo-modal-btn';
todoModal.textContent = 'Create To Do';

container.append(projectModal, todoModal);
container.appendChild(projectForm);
container.appendChild(todoForm);

// Project Modal
const closeProj = document.querySelector('#closeProj');
const closeTodo = document.querySelector('#closeTodo');
const projModal = document.querySelector('.project-modal');
const todoContModal = document.querySelector('.todo-modal');
const modalBg = document.querySelector('.modal-bg');

projectModal.addEventListener('click', () => {
  projModal.classList.add('modal-bg-active');
});

todoModal.addEventListener('click', () => {
  todoContModal.classList.add('modal-bg-active');
});

closeProj.addEventListener('click', () => {
  projModal.classList.remove('modal-bg-active');
});

closeTodo.addEventListener('click', () => {
  todoContModal.classList.remove('modal-bg-active');
});

// Project Form
const projectName = document.querySelector('#projectName');
const createProjectBtn = document.querySelector('#createProjectBtn');
const row = document.createElement('div');
row.className = 'row';
container.appendChild(row);

const createProject = (name) => {
  const newProject = new project(name);
  projects.push(newProject);
  row.appendChild(projectCard(newProject.name));
  saveLocal();
  modalBg.classList.remove('modal-bg-active');
};

createProjectBtn.addEventListener('click', () => {
  createProject(projectName.value);
});

// Todo Form
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
  saveLocal();
  renderTodos(projects[projectNameArray.indexOf(todoProject.value)]);
  todoContModal.classList.remove('modal-bg-active');
};

createTodoBtn.addEventListener('click', createTodo);

// Render Todo List
var checkboxId = 0;

const renderTodos = (project) => {
  const todoList = document.querySelector(
    `#${project.name.replace(/ |\/|_|'/g, '-')}Todo`
  );
  todoList.innerHTML = '';
  project.todos.forEach((todo) => {
    const li = document.createElement('li');
    checkboxId++;
    li.innerHTML = `<input type='checkbox' id='checkbox${checkboxId}' class='me-3'><span id='todo${checkboxId}'>${todo.title}</span>`;
    todoList.appendChild(li);
  });
  saveLocal();
  finishTodo();
};

// Misc
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
      renderTodos(project);
    });
  }
}

restoreLocal();

if (projects != null) {
  projects.forEach((project) => {
    projectNameArray.push(project.name);
  });
}

function finishTodo() {
  for (let i = 1; i <= checkboxId; i++) {
    const checkbox = document.querySelector(`#checkbox${i}`);
    const span = document.querySelector(`#todo${i}`);

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        span.style.textDecoration = 'line-through';
      } else {
        span.style.textDecoration = 'none';
      }
    })
  }
}