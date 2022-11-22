import { thumbnailTemplate } from "../../templates/thumbnailTemplate.mjs";

export class thumbnailClass {
  constructor(title, body, media, date, id) {
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
  }

  get template() {
    const template = thumbnailTemplate(this);
    return template;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".col");
    const viewBtn = element.querySelector('button[data-card="view"]');

    viewBtn.addEventListener("click", (event) => {
      window.location.href = `/post/index.html?id=${this.id}`;
    });

    // element.addEventListener("click", console.log());
    parent.append(element);
  }
}
