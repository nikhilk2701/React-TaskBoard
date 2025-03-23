export default class Note {
  constructor(id, title, description, createdAt = new Date()) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }
}
