import { userProfileTemplate } from "../templates/index.mjs";
import * as listeners from "../listeners/index.mjs";
// import { renderPosts } from "../renders/renderPosts.mjs";

/** Class representing a single user profile */
export class UserProfile {
  /**
   *
   * @param {string} name user name
   * @param {string} email registered email
   * @param {string} banner URL for banner image
   * @param {string} avatar URL for avatar image
   * @param {boolean} myProfile Indicates the profile in question is whether the logged in user or not.
   */
  constructor(name, email, banner, avatar, myProfile, counts) {
    this.name = name;
    this.email = email;
    this.banner = banner;
    this.avatar = avatar;
    this.myProfile = myProfile;
    this.counts = counts;
  }

  /** Get HTML template for a single profile*/
  get template() {
    const template = userProfileTemplate(this);
    return template;
  }

  // /** render user specific posts*/
  // get myPosts() {
  //   const posts = renderPosts();
  // }

  /** listen to form submission event (update profile)*/
  update() {
    listeners.editProfileListener();
  }

  /** listen to a click event and follow user*/
  follow() {
    listeners.followListener();
  }
  /** listen to a click event and follow user*/
  unfollow() {
    listeners.unfollowListener();
  }

  /** render the post in container.
   * If the profile is the user him/herself,
   * display "update profile button" which are otherwise hidden.
   */
  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".card");
    const editProfileBtn = doc.querySelector("#editProfileBtn");
    const followBtn = doc.querySelector("#follow-btn");
    const unfollowBtn = doc.querySelector("#unfollow-btn");
    if (this.myProfile) {
      editProfileBtn.style.display = "block";
      followBtn.style.display = "none";
      unfollowBtn.style.display = "none";
    }

    parent.append(element);
  }
}
