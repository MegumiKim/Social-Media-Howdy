import { userProfileTemplate } from "../../templates/index.mjs";

export default class userProfileClass {
  constructor(name, email, banner, avatar) {
    this.name = name;
    this.email = email;
    this.banner = banner;
    this.avatar = avatar;
  }

  get template() {
    const template = userProfileTemplate(this);

    return template;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".col-lg-4");
    parent.append(element);
  }
}
