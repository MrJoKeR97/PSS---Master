export class SingletonEventList {
  constructor() {
    if (!SingletonEventList.instance) {
      this.events = [];
      SingletonEventList.instance = this;
    }
    return SingletonEventList.instance;
  }

  addEvent(event) {
    this.events.push(event);
  }

  removeEvent(index) {
    this.events.splice(index, 1);
  }
}
