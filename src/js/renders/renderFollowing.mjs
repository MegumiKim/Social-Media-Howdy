import { UserThumbnail } from "../Class/index.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";

const container = document.querySelector("#following-container");

/**Render list of user's following  */
export async function renderFollowing(profileData) {
  try {
    if (container) {
      const following = profileData.following;

      if (!following.length) {
        errorMessage(container, `${profileData.name} has no following.`);
      } else {
        following.forEach(({ name, avatar }) => {
          const card = new UserThumbnail(name, "", avatar);

          card.render(container);
        });
      }
    }
  } catch (error) {
    errorMessage(container, "Error. Please refresh the page.");
  }
}
