import { fetchData } from "../api/apiRequests/index.mjs";
import { UserProfile } from "../Class/index.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { renderFollowers } from "./renderFollowers.mjs";
import { renderFollowing } from "./renderFollowing.mjs";
import { getParam } from "../utils/getParam.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
// import { save } from "../storage/session.mjs";

const container = document.querySelector("#main-profile-container");
/**
 * FetchData from API and render a specific profile page.
 * Construct a user profile and render followers/following
 */
export async function renderSingleProfile() {
  try {
    if (container) {
      forceLogIn();
      container.innerHTML = "";
      const name = getParam("name");
      const itsMe = checkIfItsMe(name);

      const singleProfileURL = `${BASE_URL}/profiles/${name}?_following=true&_followers=true`;
      const profile = await fetchData(singleProfileURL);
      // save("profileDetails", profile);

      // Update page title
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${profile.name}`;

      // construct an user profile
      const singleProfile = new UserProfile(
        profile.name,
        profile.email,
        profile.banner,
        profile.avatar,
        itsMe,
        profile._count,
        profile.followers
      );

      container.innerHTML = "";
      singleProfile.render(container);
      singleProfile.update();
      singleProfile.follow();
      singleProfile.unfollow();

      //render followers
      renderFollowers(profile);

      // render followers
      renderFollowing(profile);
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
