import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { checkIfItsMe } from "../utils/checkMyName.mjs";
// import userProfileClass from "../Class/userProfileClass.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#main-profile-container");

export async function renderSingleProfile() {
  if (container) {
    const url = new URL(location.href);
    const name = url.searchParams.get("name");
    const itsMe = checkIfItsMe(name);

    if (!name) {
      container.innerHTML = "<h3>Oops. Go back to the previous page</h3>";
    } else {
      const singleProfileURL = `${BASE_URL}/profiles/${name}`;
      const profile = await postsMethod.fetchPosts(singleProfileURL);
      console.log(profile);
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${profile.name}`;

      if (!profile.avatar) {
        profile.avatar = "https://picsum.photos/id/1/200/300";
      }

      const singleProfile = new Class.UserProfileClass(
        profile.name,
        profile.email,
        profile.banner,
        profile.avatar,
        itsMe
      );

      singleProfile.render(container);
      singleProfile.update();
    }
  }
}
