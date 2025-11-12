import { DueDateEvent } from '../models/Event.js';

export class EventRenderer {
  constructor(eventList, containerId) {
    this.eventList = eventList;
    this.container = document.getElementById(containerId);
  }

  render() {
    this.eventList.sortEvents();
    this.container.innerHTML = '';

    this.eventList.events.forEach((event, index) => {
      const li = document.createElement('li');
      const eventDescription = document.createElement('span');
      eventDescription.textContent = event.description;

      if (event instanceof DueDateEvent) {
        const dueDateText = document.createElement('span');
        dueDateText.textContent = ` (date ${event.dueDate.toLocaleDateString()})`;
        if (event.isOverdue()) dueDateText.style.color = 'red';
        eventDescription.appendChild(dueDateText);
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Șterge';
      deleteBtn.className = 'delete-btn';
      deleteBtn.addEventListener('click', () => {
        this.eventList.removeEvent(index);
        this.render();
      });

      eventDescription.addEventListener('click', () => {
        event.toggleCompletion();
        this.render();
      });

      if (event.completed) eventDescription.style.textDecoration = 'line-through';
      li.appendChild(eventDescription);
      li.appendChild(deleteBtn);
      this.container.appendChild(li);
    });
  }
}
