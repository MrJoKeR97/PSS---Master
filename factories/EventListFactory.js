import { EventList } from '../models/EventList.js';

export class EventListFactory {
  createEventList() {
    return new EventList();
  }
}
