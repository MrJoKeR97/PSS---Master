import { EventList } from './models/EventList.js';
import { EventRenderer } from './renderers/EventRenderer.js';
import { EventFacade } from './facade/EventFacade.js';

document.getElementById('dueDateInput').valueAsDate = new Date();

const eventList = new EventList();
const eventRenderer = new EventRenderer(eventList, 'eventList');
const eventFacade = new EventFacade(eventList, eventRenderer);

document.getElementById('addEvent').addEventListener('click', () => eventFacade.addEvent());
document.getElementById('sortByName').addEventListener('click', () => eventFacade.sortByName());
document.getElementById('sortByDate').addEventListener('click', () => eventFacade.sortByDate());

eventRenderer.render();
