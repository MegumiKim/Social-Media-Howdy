import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";
// import { authOption } from "../makeOptions.mjs";

export async function unfollowUser() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");
  const followURL = `${BASE_URL}/profiles/${name}/unfollow`;

  try {
    const options = makeOptions();
    const response = await fetch(followURL, options);

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      alert(`Successfully unfollowed ${name}`);
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
