export class SortByNameStrategy {
  sort(events, asc) {
    return events.sort((a, b) =>
      asc ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description)
    );
  }
}
