const { format, lastDayOfDecade } = require('date-fns');

function todoForm() {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const desc = document.createElement('input');
  const date = document.createElement('input');
  const priority = document.createElement('select');
  const projectSelection = document.createElement('select');
  const notes = document.createElement('input');
  const heading = document.createElement('h5');
  const button = document.createElement('button');

  heading.textContent = 'New To Do';

  title.className = 'form-label w-75 mx-auto d-block';
  title.setAttribute('id', 'todoTitle');
  title.setAttribute('type', 'text');
  title.setAttribute('placeholder', 'Title');

  desc.className = 'form-label w-75 mx-auto d-block';
  desc.setAttribute('id', 'todoDesc');
  desc.setAttribute('type', 'text');
  desc.setAttribute('placeholder', 'Description');

  date.className = 'form-label w-75 mx-auto d-block';
  date.setAttribute('type', 'date');
  date.setAttribute('id', 'todoDate');
  date.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));

  const options = ['Low', 'Medium', 'High'];
  const colors = ['green', 'orange', 'red'];
  options.forEach((option, index) => {
    const op = document.createElement('option');

    op.classList = colors[index];
    op.text = option;
    priority.add(op);
  });
  priority.className = 'form-label w-75 mx-auto d-block';
  priority.setAttribute('id', 'todoPriority');

  notes.className = 'form-label w-75 mx-auto d-block';
  notes.setAttribute('id', 'todoNotes');
  notes.setAttribute('type', 'text');
  notes.setAttribute('placeholder', 'Notes');

  button.textContent = 'Create Todo';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createTodoBtn');
  button.setAttribute('type', 'button');

  const projects = JSON.parse(localStorage.getItem('projects'));
  projects.forEach((project) => {
    const proj = document.createElement('option');
    proj.text = project.name;
    projectSelection.add(proj);
  });
  projectSelection.className = 'form-label w-75 mx-auto d-block';
  projectSelection.setAttribute('id', 'todoProjectSelection');

  form.append(
    heading,
    title,
    desc,
    date,
    priority,
    notes,
    projectSelection,
    button
  );

  return form;
}

module.exports = todoForm();
