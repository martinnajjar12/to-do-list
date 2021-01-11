function projectCard(title) {
  const column = document.createElement('div');
  column.className = 'col-6 mt-4';
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const todoList = document.createElement('ul');

  card.className = 'card';
  card.style.width = '18rem';

  cardHeader.className = 'card-header';

  todoList.className = 'todos';

  cardTitle.textContent = title;
  cardHeader.appendChild(cardTitle);

  card.append(cardHeader, todoList);
  column.appendChild(card);

  return column;
}

module.exports = projectCard;
