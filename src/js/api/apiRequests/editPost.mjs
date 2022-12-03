// import { optionsWithBody } from "../makeOptions.mjs";
import { load } from "../../storage/local.mjs";
import { renderSinglePost } from "../../renders/renderSinglePost.mjs";

export async function editPost(postData, url) {
  try {
    const options = optionsWithBody(postData);
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    renderSinglePost();
  } catch (e) {
    console.log(e);
  }
}

function optionsWithBody(body) {
  const token = load("accessToken");
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
}
