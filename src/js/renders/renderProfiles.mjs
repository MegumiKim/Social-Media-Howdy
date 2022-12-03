import * as requests from "../api/apiRequests/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
import { save } from "../storage/session.mjs";
const container = document.querySelector("#profiles-container");
const profileURL = `${BASE_URL}/profiles`;

/**Make new user profile thumbnail Class for each profile data fetched from API  */
export async function renderProfiles() {
  try {
    if (container) {
      forceLogIn();
      const profiles = await requests.fetchData(profileURL);
      save("cached-profiles", profiles);

      profiles.forEach(({ name, email, avatar }) => {
        const card = new Class.UserThumbnail(name, email, avatar);

        card.render(container);
      });
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
