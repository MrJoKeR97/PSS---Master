export class EventList {
  constructor() {
    this.events = [];
    this.sortStrategy = null;
    this.asc = true;
  }

  addEvent(event) {
    this.events.push(event);
  }

  removeEvent(index) {
    this.events.splice(index, 1);
  }

  setSortStrategy(sortStrategy) {
    this.sortStrategy = sortStrategy;
  }

  sortEvents() {
    if (this.sortStrategy) {
      this.events = this.sortStrategy.sort(this.events, this.asc);
    }
  }
}
