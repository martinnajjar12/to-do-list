const { format } = require('date-fns');

class Todo {
  constructor(
    title,
    description,
    date,
    priority,
    notes,
    project,
    finished = false,
  ) {
    this.title = title;
    this.description = description;
    this.date = format(new Date(date.replace(/-/g, ',')), 'yyyy-MM-dd');
    this.priority = priority;
    this.notes = notes;
    this.finished = finished;
    this.project = project;
    this.id = Todo.incrementId();
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId += 1;
    return this.latestId;
  }
}

module.exports = Todo;
