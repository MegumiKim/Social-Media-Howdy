import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
// import userProfileClass from "../Class/userProfileClass.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#profile-container");

export async function renderSingleProfile() {
  if (container) {
    const url = new URL(location.href);
    const name = url.searchParams.get("name");

    if (!name) {
      container.innerHTML =
        "<h3>An error occurred. Go back to the previous page</2>";
    } else {
      const singleProfileURL = `${BASE_URL}/profiles/${name}`;
      const profile = await postsMethod.fetchPosts(singleProfileURL);
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${profile.title}`;

      if (!profile.avatar) {
        profile.avatar = "";
      }
      const singleProfile = new Class.UserProfileClass(
        profile.name,
        profile.email,
        profile.banner,
        profile.avatar
      );

      singleProfile.render(container);
    }
  }
}
