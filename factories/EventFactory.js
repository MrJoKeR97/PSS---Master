import { Event, DueDateEvent } from '../models/Event.js';

export class EventFactory {
  createEvent(description, dueDate) {
    return dueDate ? new DueDateEvent(description, dueDate) : new Event(description);
  }
}
