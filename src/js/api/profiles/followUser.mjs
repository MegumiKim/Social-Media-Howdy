import { renderSingleProfile } from "../../renders/index.mjs";
import { load } from "../../storage/local.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { BASE_URL } from "../constants.mjs";

export async function followUser() {
  const name = getParam("name");
  const followURL = `${BASE_URL}/profiles/${name}/follow`;

  try {
    const options = makeOptions();
    const response = await fetch(followURL, options);
    const result = await response.json();

    renderSingleProfile();
  } catch (e) {
    console.log(e);
  }
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
