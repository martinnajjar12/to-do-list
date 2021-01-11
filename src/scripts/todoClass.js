const { format } = require('date-fns');

class Todo {
  constructor(title, description, date, priority, notes) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(date), 'dd-MM-yyyy');
    this.priority = priority;
    this.notes = notes;
  }
}

module.exports = Todo;
