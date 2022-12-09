import { renderSingleProfile } from "../../renders/index.mjs";
import { load } from "../../storage/local.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { BASE_URL } from "../constants.mjs";
// import { errorMessage } from "../../templates/errorMessage.mjs";

export async function unfollowUser() {
  const name = getParam("name");
  const followURL = `${BASE_URL}/profiles/${name}/unfollow`;

  const options = makeOptions();
  const response = await fetch(followURL, options);
  const result = await response.json();

  renderSingleProfile();
}

function makeOptions() {
  const token = load("accessToken");
  return {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}
