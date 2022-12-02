import { UserThumbnail } from "../Class/index.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { load } from "../storage/session.mjs";

const container = document.querySelector("#followers-container");

/**Render list of user's followers  */
export async function renderFollowers() {
  try {
    if (container) {
      const myProfile = load("profileDetails");
      const followers = myProfile.followers;

      followers.forEach(({ name, avatar }) => {
        const card = new UserThumbnail(name, "", avatar);

        card.render(container);
      });
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
