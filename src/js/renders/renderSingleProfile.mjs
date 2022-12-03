import { fetchData } from "../api/apiRequests/index.mjs";
import { UserProfile } from "../Class/index.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { save } from "../storage/session.mjs";

const container = document.querySelector("#main-profile-container");

export async function renderSingleProfile() {
  try {
    if (container) {
      const url = new URL(location.href);
      const name = url.searchParams.get("name");
      const itsMe = checkIfItsMe(name);

      const singleProfileURL = `${BASE_URL}/profiles/${name}?_following=true&_followers=true`;
      const profile = await fetchData(singleProfileURL);
      save("profileDetails", profile);
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${profile.name}`;

      console.log(profile);

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
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
