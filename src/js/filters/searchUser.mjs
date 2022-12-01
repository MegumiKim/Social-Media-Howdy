import { errorMessage } from "../../templates/errorMessage.mjs";
import { UserThumbnail } from "../Class/UserThumbnail.mjs";
import { loadFromSessionStorage } from "../storage/load.mjs";
import * as filters from "./filters/index.mjs";

const container = document.querySelector("#profiles-container");

export async function searchUser(searchValue) {
  try {
    let profiles = loadFromSessionStorage("cached-profiles");

    container.innerHTML = "";
    profiles = profiles.filter((profile) =>
      filters.profilesFilter(profile, searchValue)
    );

    if (profiles.length) {
      profiles.forEach((profile) => {
        const card = new UserThumbnail(
          profile.name,
          profile.email,
          profile.banner,
          profile.avatar
        );
        card.render(container);
      });
    } else {
      container.innerHTML = `<div class="col m-auto"><h3>No result for "${searchValue}"</h3></div>`;
    }
  } catch (error) {
    errorMessage(container);
  }
}
