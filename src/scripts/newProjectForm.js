function projectForm() {
  const modalBg = document.createElement('div');
  const modalMain = document.createElement('div');
  const form = document.createElement('form');
  const name = document.createElement('input');
  const heading = document.createElement('h5');
  const button = document.createElement('button');
  const close = document.createElement('i');
  const div = document.createElement('div');

  heading.textContent = 'New Project';
  heading.className = 'form-label w-75 mx-auto d-block';

  name.className = 'form-label w-75 mx-auto d-block';
  name.setAttribute('id', 'projectName');
  name.setAttribute('type', 'text');

  button.textContent = 'Create Project';
  button.className = 'btn btn-primary mx-auto d-block';
  button.setAttribute('id', 'createProjectBtn');
  button.setAttribute('type', 'button');

  form.append(heading, name, button);

  // Modal
  modalBg.className = 'modal-bg project-modal';
  modalMain.className = 'modal-main';

  close.className = 'fas fa-times';
  div.className = 'close';
  div.setAttribute('id', 'closeProj');
  div.appendChild(close);

  modalMain.append(div, form);
  modalBg.appendChild(modalMain);

  return modalBg;
}

module.exports = projectForm();
