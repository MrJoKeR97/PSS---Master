export class EventListObserver {
  constructor(eventList) {
    this.eventList = eventList;
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.eventList));
  }
}
