import { EventFactory } from '../factories/EventFactory.js';
import { SortByNameStrategy } from '../strategies/SortByNameStrategy.js';
import { SortByDateStrategy } from '../strategies/SortByDateStrategy.js';

export class EventFacade {
  constructor(eventList, eventRenderer) {
    this.eventList = eventList;
    this.eventRenderer = eventRenderer;
  }

  addEvent() {
    const eventFactory = new EventFactory();
    const eventInput = document.getElementById('eventInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const eventDescription = eventInput.value.trim();
    const dueDateValue = dueDateInput.value;

    if (eventDescription) {
      const event = eventFactory.createEvent(eventDescription, dueDateValue);
      this.eventList.addEvent(event);
      this.eventRenderer.render();
      eventInput.value = '';
      dueDateInput.value = '';
    }
  }

  sortByName() {
    this.eventList.asc = !this.eventList.asc;
    this.eventList.setSortStrategy(new SortByNameStrategy());
    this.eventList.sortEvents();
    this.eventRenderer.render();
  }

  sortByDate() {
    this.eventList.asc = !this.eventList.asc;
    this.eventList.setSortStrategy(new SortByDateStrategy());
    this.eventList.sortEvents();
    this.eventRenderer.render();
  }
}
