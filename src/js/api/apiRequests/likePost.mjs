import { renderSinglePost } from "../../renders/renderSinglePost.mjs";
import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";

export async function likePost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const reactURL = `${BASE_URL}/posts/${id}/react/🧡`;

  try {
    const options = optionsWithBody();
    const response = await fetch(reactURL, options);
    const result = await response.json();
    console.log(result);
    renderSinglePost();
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
