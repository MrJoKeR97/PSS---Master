export class SortByDateStrategy {
  sort(events, asc) {
    return events.sort((a, b) =>
      asc ? a.dueDate - b.dueDate : b.dueDate - a.dueDate
    );
  }
}
