import { postThumbnail } from "../../templates/index.mjs";

export class ThumbnailClass {
  constructor(title, body, media, date, id, author) {
    const DateFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleDateString("en-GB", DateFormatOptions);
    this.id = id;
    this.author = author;
  }

  get template() {
    const template = postThumbnail(this);
    return template;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".col");

    parent.append(element);
  }
}
