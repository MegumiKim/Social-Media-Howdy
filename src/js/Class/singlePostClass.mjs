import { singlePostTemplate } from "../../templates/singlePostTemplate.mjs";

export class singlePostClass {
  constructor(title, body, media = "", date, id) {
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleDateString();
    this.id = id;
  }

  get template() {
    const post = singlePostTemplate(this);
    return post;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".col");
    // const viewBtn = element.querySelector('button[data-card="view"]');
    // viewBtn.addEventListener("click", console.log());

    // element.addEventListener("click", console.log());
    parent.append(element);
  }
}
