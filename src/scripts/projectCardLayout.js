function projectCard(title) {
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

  return card;
}

module.exports = projectCard;
