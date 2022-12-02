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
    console.log(result);

    if (response.ok) {
      alert(`Successfully followed ${name}`);
    } else {
      alert(result.errors[0].message);
    }
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
