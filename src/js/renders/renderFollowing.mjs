import { UserThumbnail } from "../Class/index.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { load } from "../storage/session.mjs";

const container = document.querySelector("#following-container");

/**Render list of user's following  */
export async function renderFollowing() {
  try {
    if (container) {
      const myProfile = load("profileDetails");
      const following = myProfile.following;

      following.forEach(({ name, avatar }) => {
        const card = new UserThumbnail(name, "", avatar);

        card.render(container);
      });
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
