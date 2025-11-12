import { Event } from '../../models/Event.js';

export class LegacyEventAdapter extends Event {
  constructor(legacyEvent) {
    super(legacyEvent.description);
    this.legacyEvent = legacyEvent;
  }

  toggleCompletion() {
    this.legacyEvent.complete();
  }
}
