const { format } = require('date-fns');

function todoForm() {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const desc = document.createElement('input');
  const date = document.createElement('input');
  const priority = document.createElement('select');
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
  date.setAttribute('min', format(new Date(), 'yyyy-MM-dd'));

  const options = ['Low', 'Medium', 'High'];
  const colors = ['green', 'orange', 'red'];
  options.forEach((option, index) => {
    const op = document.createElement('option');

    op.classList = colors[index]
    op.text = option;
    priority.add(op);
  })
  priority.className = 'form-label w-75 mx-auto d-block';

  notes.className = 'form-label w-75 mx-auto d-block';
  notes.setAttribute('id', 'todoNotes');
  notes.setAttribute('type', 'text');
  notes.setAttribute('placeholder', 'Notes');

  button.textContent = 'Create Project';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createBtn');
  button.setAttribute('type', 'button');

  form.append(heading, title, desc, date, priority, notes, button);

  return form;
}

module.exports = todoForm();