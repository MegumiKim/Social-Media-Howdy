import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

const container = document.querySelector("#main-profile-container");

export async function renderSingleProfile() {
  try {
    if (container) {
      const url = new URL(location.href);
      const name = url.searchParams.get("name");
      const itsMe = checkIfItsMe(name);

      const singleProfileURL = `${BASE_URL}/profiles/${name}`;
      const profile = await postsMethod.fetchPosts(singleProfileURL);
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${profile.name}`;

      const singleProfile = new Class.UserProfile(
        profile.name,
        profile.email,
        profile.banner,
        profile.avatar,
        itsMe
      );

      singleProfile.render(container);
      singleProfile.update();
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
