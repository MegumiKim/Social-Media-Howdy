import { userProfileTemplate } from "../templates/index.mjs";
import * as listeners from "../listeners/index.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
// import { renderPosts } from "../renders/renderPosts.mjs";

/** Class representing a single user profile */
export class UserProfile {
  /**
   *
   * @param {object} name user profile data
   * @param {boolean} myProfile Indicates the profile in question is whether the logged in user or not.
   */
  constructor(profile, myProfile) {
    this.name = profile.name;
    this.email = profile.email;
    this.banner = profile.banner;
    this.avatar = profile.avatar;
    this.myProfile = myProfile;
    this.counts = profile._count;
    this.followers = profile.followers;
  }

  /** Get HTML template for a single profile*/
  get template() {
    const template = userProfileTemplate(this);
    return template;
  }

  /** check if the logged-in user is following the profile */
  get amIfollowing() {
    if (this.followers.find((follower) => checkIfItsMe(follower.name))) {
      return true;
    } else {
      return false;
    }
  }

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
    const unFollowBtn = doc.querySelector("#unfollow-btn");
    const createPost = document.querySelector("#new-post");

    if (!this.amIfollowing) {
      followBtn.classList.remove("d-none");
    } else {
      unFollowBtn.classList.remove("d-none");
    }
    if (this.myProfile) {
      editProfileBtn.classList.remove("d-none");
      followBtn.classList.add("d-none");
      unFollowBtn.classList.add("d-none");
      createPost.classList.remove("d-none");
    }
    parent.append(element);
  }
}
