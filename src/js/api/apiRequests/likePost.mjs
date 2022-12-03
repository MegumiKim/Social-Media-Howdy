import { renderSinglePost } from "../../renders/renderSinglePost.mjs";
import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";

// import { authOption } from "../makeOptions.mjs";

export async function likePost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const reactURL = `${BASE_URL}/posts/${id}/react/🧡`;
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
    const response = await fetch(reactURL, options);

    console.log(response);
    const result = await response.json();
    console.log(result);
    renderSinglePost();
  } catch (e) {
    console.log(e);
  }
}
