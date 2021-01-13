require('./css/styles.css');
const { format } = require('date-fns');
const todo = require('./scripts/todoClass');
const project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const todoForm = require('./scripts/newTodoForm');
const editTodo = require('./scripts/editTodo');

let projects = [];
const projectNameArray = [];

// Container
const container = document.querySelector('.container');
const projectModal = document.createElement('button');
const todoModal = document.createElement('button');

projectModal.setAttribute('type', 'button');
projectModal.className = 'project-modal-btn btn btn-primary mt-3 me-3';
projectModal.textContent = 'Create Project';

todoModal.setAttribute('type', 'button');
todoModal.className = 'todo-modal-btn btn btn-primary mt-3';
todoModal.textContent = 'Create To Do';

container.append(projectModal, todoModal);
container.appendChild(projectForm);
container.appendChild(todoForm);
container.appendChild(editTodo);

// Project Modal

const projModal = document.querySelector('.project-modal');
const todoContModal = document.querySelector('.todo-modal');
const editModalDiv = document.querySelector('.edit-todo-modal');
const modalBg = document.querySelector('.modal-bg');
const allClose = document.querySelectorAll('.close');

projectModal.addEventListener('click', () => {
  projModal.classList.add('modal-bg-active');
});

todoModal.addEventListener('click', () => {
  todoContModal.classList.add('modal-bg-active');
});

const modals = [projModal, todoContModal, editModalDiv];
allClose.forEach((close, index) => {
  close.addEventListener('click', () => {
    modals[index].classList.remove('modal-bg-active');
  });
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
  restoreLocal();
});

// Todo Form
const todoTitle = document.querySelector('#todoTitle');
const todoDesc = document.querySelector('#todoDesc');
const todoDate = document.querySelector('#todoDate');
const todoPriority = document.querySelector('#todoPriority');
const todoProject = document.querySelector('#todoProjectSelection');
const todoNotes = document.querySelector('#todoNotes');
const createTodoBtn = document.querySelector('#createTodoBtn');

let checkboxId = 0;

const createTodo = () => {
  const newTodo = new todo(
    todoTitle.value,
    todoDesc.value,
    todoDate.value,
    todoPriority.value,
    todoNotes.value,
    todoProject.value
  );

  projects[projectNameArray.indexOf(todoProject.value)].todos.push(newTodo);
  saveLocal();
  checkboxId = 0;
  renderTodos(projects[projectNameArray.indexOf(todoProject.value)]);
  todoContModal.classList.remove('modal-bg-active');
};

createTodoBtn.addEventListener('click', createTodo);

// Render Todo List
const editTodoTitle = document.querySelector('#editTodoTitle');
const editTodoDesc = document.querySelector('#editTodoDesc');
const editTodoDate = document.querySelector('#editTodoDate');
const editTodoPriority = document.querySelector('#editTodoPriority');
const editTodoProject = document.querySelector('#editTodoProjectSelection');
const editTodoNotes = document.querySelector('#editTodoNotes');
const editTodoBtn = document.querySelector('#editTodoBtn');
const editElems = [
  editTodoTitle,
  editTodoDesc,
  editTodoDate,
  editTodoPriority,
  editTodoNotes,
  editTodoProject,
];

function arrayRemove(arr) {
  return arr.filter(function (ele) {
    if (ele === true) {
      return ele != true;
    } else {
      return ele != false;
    }
  });
}

const renderTodos = (project) => {
  const projectName = project.name.replace(/ |\/|_|'/g, '-');
  const todoList = document.querySelector(`#${projectName}Todo`);
  todoList.innerHTML = '';
  project.todos.forEach((todo) => {
    const li = document.createElement('li');
    checkboxId++;

    if (todo.finished) {
      li.innerHTML = `
        <input type='checkbox' id='${projectName}${checkboxId}' class='me-3' checked><span class='${todo.priority.toLowerCase()}' id='span${projectName}${checkboxId}' style='text-decoration: line-through'>${
        todo.title
      } ${todo.date}</span>`;
    } else {
      li.innerHTML = `<input type='checkbox' id='${projectName}${checkboxId}' class='me-3'><span class='${todo.priority.toLowerCase()}' id='span${projectName}${checkboxId}'>${
        todo.title
      } ${todo.date}</span>`;
    }

    todoList.appendChild(li);

    const span = document.querySelector(`#span${projectName}${checkboxId}`);

    span.addEventListener('click', () => {
      editModalDiv.classList.add('modal-bg-active');
      const todoValues = arrayRemove(Object.values(todo));
      editElems.forEach((elem, index) => {
        elem.value = todoValues[index];
        if (elem === editTodoDate) {
          elem.value = todoValues[index];
        }
      });
    });

    finishTodo(projectName, todo);
  });
  saveLocal();
};

function updateTodo(todo) {
  const todoKeys = Object.keys(todo);
  todoKeys.splice(todoKeys.indexOf('finished'), 1);
  editElems.forEach((elem, index) => {
    todo[todoKeys[index]] = elem.value;
  });
  saveLocal();
}

editTodoBtn.addEventListener('click', () => updateTodo(currentTodo));

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
      checkboxId = 0;
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

function finishTodo(projectName, todo) {
  for (let i = 1; i <= checkboxId; i++) {
    const checkbox = document.querySelector(`#${projectName}${i}`);
    const span = document.querySelector(`#span${projectName}${i}`);
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        todo.finished = true;
        span.style.textDecoration = 'line-through';
      } else {
        todo.finished = false;
        span.style.textDecoration = 'none';
      }
      saveLocal();
    });
  }
}
