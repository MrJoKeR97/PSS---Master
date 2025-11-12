import { Event } from '../../models/Event.js';

export class EventWithPriority extends Event {
  constructor(event, priority) {
    super(event.description);
    this.event = event;
    this.priority = priority;
  }

  toggleCompletion() {
    this.event.toggleCompletion();
  }
}
