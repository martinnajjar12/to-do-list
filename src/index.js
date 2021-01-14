require('./css/styles.css');
const Todo = require('./scripts/todoClass');
const Project = require('./scripts/project');
const projectCard = require('./scripts/projectCardLayout');
const projectForm = require('./scripts/newProjectForm');
const todoForm = require('./scripts/newTodoForm');
const editTodo = require('./scripts/editTodo');

let projects = [];
const projectNameArray = [];

// Container
const container = document.querySelector('.container');
const row = document.createElement('div');
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

// Project and Todo Modals
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

// Todo Form
const todoTitle = document.querySelector('#todoTitle');
const todoDesc = document.querySelector('#todoDesc');
const todoDate = document.querySelector('#todoDate');
const todoPriority = document.querySelector('#todoPriority');
const todoProject = document.querySelector('#todoProjectSelection');
const todoNotes = document.querySelector('#todoNotes');
const createTodoBtn = document.querySelector('#createTodoBtn');

let checkboxId = 0;

function saveLocal() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

const createProject = (name) => {
  const newProject = new Project(name);
  projects.push(newProject);
  row.appendChild(projectCard(newProject.name));
  saveLocal();
  modalBg.classList.remove('modal-bg-active');
};

const resetRow = () => {
  const row = document.querySelector('.row');
  row.innerHTML = '';
};

function finishTodo(projectName, todo) {
  for (let i = 1; i <= checkboxId; i += 1) {
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

const editTodoTitle = document.querySelector('#editTodoTitle');
const editTodoDesc = document.querySelector('#editTodoDesc');
const editTodoDate = document.querySelector('#editTodoDate');
const editTodoPriority = document.querySelector('#editTodoPriority');
const editTodoProject = document.querySelector('#projectId');
const editTodoNotes = document.querySelector('#editTodoNotes');
const todoId = document.querySelector('#todoId');
const editElems = {
  titleInput: editTodoTitle,
  descInput: editTodoDesc,
  dateInput: editTodoDate,
  priorityInput: editTodoPriority,
  notesInput: editTodoNotes,
  projectInput: editTodoProject,
  todoIdInput: todoId,
};

const renderTodos = (project) => {
  const projectName = project.name.replace(/ |\/|_|'/g, '-');
  const todoList = document.querySelector(`#${projectName}Todo`);
  todoList.innerHTML = '';
  const todoArray = project.todos;
  todoArray.forEach((todo) => {
    const li = document.createElement('li');
    checkboxId += 1;

    if (todo.finished) {
      li.innerHTML = `<input type='checkbox' id='${projectName}${checkboxId}' class='me-3' checked><span class='${todo.priority.toLowerCase()}' id='span${projectName}${checkboxId}' style='text-decoration: line-through'>${todo.title} ${todo.date}</span>`;
    } else {
      li.innerHTML = `<input type='checkbox' id='${projectName}${checkboxId}' class='me-3'><span class='${todo.priority.toLowerCase()}' id='span${projectName}${checkboxId}'>${todo.title} ${todo.date}</span>`;
    }

    todoList.appendChild(li);

    const span = document.querySelector(`#span${projectName}${checkboxId}`);

    span.addEventListener('click', () => {
      editModalDiv.classList.add('modal-bg-active');
      editElems.titleInput.value = todo.title;
      editElems.descInput.value = todo.description;
      editElems.dateInput.value = todo.date;
      editElems.priorityInput.value = todo.priority;
      editElems.notesInput.value = todo.notes;
      editElems.projectInput.value = todo.project;
      editElems.todoIdInput.value = todo.id;
    });

    finishTodo(projectName, todo);
  });
  saveLocal();
};

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

// Project Form
const projectName = document.querySelector('#projectName');
const createProjectBtn = document.querySelector('#createProjectBtn');
row.className = 'row';
container.appendChild(row);

createProjectBtn.addEventListener('click', () => {
  createProject(projectName.value);
  restoreLocal();
});

function todoArrayOf(project) {
  return projects[projectNameArray.indexOf(project)];
}

function findCurrentTodo(todos, todoId) {
  const currentTodoIndex = todos.findIndex((obj) => obj.id == todoId);
  return todos[currentTodoIndex];
}

const createTodo = () => {
  const newTodo = new Todo(
    todoTitle.value,
    todoDesc.value,
    todoDate.value,
    todoPriority.value,
    todoNotes.value,
    todoProject.value,
  );

  if (newTodo.description === '') {
    newTodo.description = 'none';
  }

  if (newTodo.notes === '') {
    newTodo.notes = 'none';
  }

  todoArrayOf(todoProject.value).todos.push(newTodo);
  saveLocal();
  checkboxId = 0;
  renderTodos(todoArrayOf(todoProject.value));
  todoContModal.classList.remove('modal-bg-active');
};

createTodoBtn.addEventListener('click', createTodo);

const updateTodo = () => {
  const todosArray = todoArrayOf(editElems.projectInput.value).todos;
  const currentTodo = findCurrentTodo(todosArray, editElems.todoIdInput.value);
  currentTodo.date = editElems.dateInput.value;
  currentTodo.description = editElems.descInput.value;
  currentTodo.notes = editElems.notesInput.value;
  currentTodo.priority = editElems.priorityInput.value;
  currentTodo.title = editElems.titleInput.value;
  editModalDiv.classList.remove('modal-bg-active');
  saveLocal();
};
// Edit a To-Do

const editTodoBtn = document.querySelector('#editTodoBtn');

editTodoBtn.addEventListener('click', () => {
  updateTodo();
  restoreLocal();
});

const deleteTodoBtn = document.querySelector('#deleteTodoBtn');

deleteTodoBtn.addEventListener('click', () => {
  const todosArray = todoArrayOf(editElems.projectInput.value).todos;
  const currentTodo = findCurrentTodo(todosArray, editElems.todoIdInput.value);
  todosArray.splice(todosArray.indexOf(currentTodo), 1);
  editModalDiv.classList.remove('modal-bg-active');
  saveLocal();
  restoreLocal();
});

// Misc

restoreLocal();

if (projects != null) {
  projects.forEach((project) => {
    projectNameArray.push(project.name);
  });
}
