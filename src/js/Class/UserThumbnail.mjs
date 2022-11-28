import { userThumbnail } from "../../templates/index.mjs";

export class UserThumbnail {
  constructor(name, email, banner, avatar) {
    this.name = name;
    this.email = email;
    this.banner = banner;
    this.avatar = avatar;
  }

  get template() {
    const template = userThumbnail(this);

    return template;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".list-group-item");
    parent.append(element);
  }
}
