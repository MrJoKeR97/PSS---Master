export class LegacyEvent {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}
