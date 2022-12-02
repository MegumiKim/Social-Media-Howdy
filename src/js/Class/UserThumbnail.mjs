import { userThumbnail } from "../templates/index.mjs";

/**Class representing a user profile thumbnail */
export class UserThumbnail {
  /**
   * @param {string} name user name
   * @param {string} email registered email
   * @param {string} banner URL for banner image
   * @param {string} avatar URL for avatar image
   */
  constructor(name, email, banner, avatar) {
    this.name = name;
    this.email = email;
    this.banner = banner;
    this.avatar = avatar;
  }

  /** Get HTML template for user profile thumbnail*/
  get template() {
    return userThumbnail(this);
  }

  /** Render the user profile thumbnail in the container */
  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".list-group-item");
    parent.append(element);
  }
}
