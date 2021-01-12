const { format } = require('date-fns');
class Todo {
  constructor(title, description, date, priority, notes, finished = false) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(date), 'dd-MM-yyyy');
    this.priority = priority;
    this.notes = notes;
    this.finished = finished;
  }
}

module.exports = Todo;
