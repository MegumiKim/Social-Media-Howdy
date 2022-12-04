import { UserThumbnail } from "../Class/index.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";

const container = document.querySelector("#followers-container");

/**Render list of user's followers  */
export async function renderFollowers(profileData) {
  try {
    if (container) {
      const followers = profileData.followers;

      if (!followers.length) {
        errorMessage(container, `${profileData.name} has no follower.`);
      } else {
        followers.forEach(({ name, avatar }) => {
          const card = new UserThumbnail(name, "", avatar);

          card.render(container);
        });
      }
    }
  } catch (error) {
    errorMessage(container, "Error. Please refresh the page.");
    console.log(error);
  }
}
