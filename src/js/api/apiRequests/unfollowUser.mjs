import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";
// import { authOption } from "../makeOptions.mjs";

export async function unfollowUser() {
  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const followURL = `${BASE_URL}/profiles/${name}/unfollow`;
  // const comment = await requests.fetchPosts(postCommentURL);

  try {
    const token = load("accessToken");
    const options = {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    // const options = authOption("PUT");
    const response = await fetch(followURL, options);

    console.log(response);
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
