const { format } = require('date-fns');

function editTodo() {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const desc = document.createElement('input');
  const date = document.createElement('input');
  const priority = document.createElement('select');
  const notes = document.createElement('input');
  const id = document.createElement('input');
  const heading = document.createElement('h5');
  const button = document.createElement('button');
  const modalBg = document.createElement('div');
  const modalMain = document.createElement('div');
  const close = document.createElement('i');
  const div = document.createElement('div');
  const deleteTodoBtn = document.createElement('button');
  const btnCont = document.createElement('div');
  const project = document.createElement('input');

  heading.textContent = 'Edit To Do';
  heading.className = 'w-75 mx-auto d-block';

  title.className = 'form-control mb-3 w-75 mx-auto d-block';
  title.setAttribute('id', 'editTodoTitle');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');

  desc.className = 'form-control mb-3 w-75 mx-auto d-block';
  desc.setAttribute('id', 'editTodoDesc');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');

  date.className = 'form-control mb-3 w-75 mx-auto d-block';
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'editTodoDate');
  date.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));

  const options = ['Low', 'Medium', 'High'];
  const colors = ['green', 'orange', 'red'];
  options.forEach((option, index) => {
    const op = document.createElement('option');
    op.classList = colors[index];
    op.text = option;
    priority.add(op);
  });
  priority.className = 'form-select mb-3 w-75 mx-auto d-block';
  priority.setAttribute('id', 'editTodoPriority');

  notes.className = 'form-control mb-3 w-75 mx-auto d-block';
  notes.setAttribute('id', 'editTodoNotes');
  notes.setAttribute('type', 'text');
  notes.setAttribute('placeholder', 'Notes');

  id.setAttribute('type', 'hidden');
  id.setAttribute('id', 'todoId');

  project.setAttribute('type', 'hidden');
  project.setAttribute('id', 'projectId');

  button.textContent = 'Update Todo';
  button.className = 'btn btn-primary d-block';
  button.setAttribute('id', 'editTodoBtn');
  button.setAttribute('type', 'button');

  deleteTodoBtn.textContent = 'Delete';
  deleteTodoBtn.className = 'btn btn-danger d-block';
  deleteTodoBtn.setAttribute('id', 'deleteTodoBtn');
  deleteTodoBtn.setAttribute('type', 'button');

  btnCont.className = 'mb-3 w-75 mx-auto d-flex justify-content-around';
  btnCont.append(button, deleteTodoBtn);

  form.append(
    heading,
    title,
    desc,
    date,
    priority,
    notes,
    btnCont,
    id,
    project,
  );

  // Modal
  modalBg.className = 'modal-bg edit-todo-modal';
  modalMain.className = 'modal-main';
  close.className = 'fas fa-times';

  div.className = 'close';
  div.setAttribute('id', 'editCloseTodo');
  div.appendChild(close);

  modalMain.append(div, form);
  modalBg.appendChild(modalMain);

  return modalBg;
}

module.exports = editTodo();
