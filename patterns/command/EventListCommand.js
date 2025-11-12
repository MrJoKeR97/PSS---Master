export class EventListCommand {
  constructor(eventList) {
    this.eventList = eventList;
    this.commands = [];
  }

  addEvent(event) {
    this.commands.push(() => this.eventList.addEvent(event));
  }

  removeEvent(index) {
    this.commands.push(() => this.eventList.removeEvent(index));
  }

  execute() {
    this.commands.forEach((command) => command());
  }
}
