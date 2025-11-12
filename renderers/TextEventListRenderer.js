export class TextEventListRenderer {
  constructor(eventList) {
    this.eventList = eventList;
  }

  render() {
    return this.eventList.events.reduce((acc, event) => acc + event.description + '\n', '');
  }
}
