import { userProfileTemplate } from "../../templates/index.mjs";
import { editProfileListener } from "../listeners/editProfile.mjs";
import { renderPosts } from "../posts/renderPosts.mjs";

export class UserProfileClass {
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

  get myPosts() {
    const posts = renderPosts();
  }

  update() {
    editProfileListener();
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".card");

    parent.append(element);
  }
}
