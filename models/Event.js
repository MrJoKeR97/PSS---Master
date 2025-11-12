export class Event {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }
}

export class DueDateEvent extends Event {
  constructor(description, dueDate) {
    super(description);
    this.dueDate = new Date(dueDate);
  }

  isOverdue() {
    const now = new Date();
    return this.dueDate < now && !this.completed;
  }
}
