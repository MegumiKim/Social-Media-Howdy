import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";

export async function unfollowUser() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");
  const followURL = `${BASE_URL}/profiles/${name}/unfollow`;

  try {
    const options = optionsWithBody();
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

function optionsWithBody() {
  const token = load("accessToken");
  return {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}
