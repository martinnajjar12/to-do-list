const { format } = require('date-fns');
class Todo {
  static lastId = 0;

  id;
  constructor(
    title,
    description,
    date,
    priority,
    notes,
    project,
    finished = false
  ) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(date), 'yyyy-MM-dd');
    this.priority = priority;
    this.notes = notes;
    this.finished = finished;
    this.project = project;
    this.id = ++Todo.lastId;
  }
}

module.exports = Todo;
