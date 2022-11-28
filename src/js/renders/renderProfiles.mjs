import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

const container = document.querySelector("#profiles-container");
const profileURL = `${BASE_URL}/profiles`;

/**Make new user profile thumbnail Class for each profile data fetched from API  */
export async function renderProfiles() {
  try {
    if (container) {
      const profiles = await postsMethod.fetchPosts(profileURL);

      profiles.forEach(({ name, email, banner, avatar }) => {
        const card = new Class.UserThumbnail(name, email, banner, avatar);

        card.render(container);
      });
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
