export class EventListView {
  constructor(eventListObserver) {
    this.eventListObserver = eventListObserver;
    this.eventListObserver.addObserver(this);
  }

  update(eventList) {
    console.log(`Event List View: ${eventList.events.map((e) => e.description).join(', ')}`);
  }
}
