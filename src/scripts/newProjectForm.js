function projectForm() {
  const form = document.createElement('form');
  const name = document.createElement('input');
  const heading = document.createElement('h5');
  const button = document.createElement('button');

  heading.textContent = 'New Project';

  name.className = 'form-label w-75 mx-auto d-block';
  name.setAttribute('id', 'projectName');
  name.setAttribute('type', 'text');

  button.textContent = 'Create Project';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createProjectBtn');
  button.setAttribute('type', 'button');

  form.append(heading, name, button);

  return form;
}

module.exports = projectForm();
