export class HtmlEventListRenderer {
  constructor(eventList) {
    this.eventList = eventList;
  }

  render() {
    const ul = document.createElement('ul');
    this.eventList.events.forEach((event) => {
      const li = document.createElement('li');
      li.textContent = event.description;
      ul.appendChild(li);
    });
    return ul;
  }
}
