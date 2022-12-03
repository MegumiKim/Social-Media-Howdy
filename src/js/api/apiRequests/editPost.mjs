import { makeOptions } from "../makeOptions.mjs";
import { load } from "../../storage/local.mjs";
import { renderSinglePost } from "../../renders/renderSinglePost.mjs";

export async function editPost(postData, url) {
  try {
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = makeOptions("PUT", postData, auth);
    const response = await fetch(url, options);
    console.log(response);

    const result = await response.json();
    console.log(result);
    renderSinglePost();
  } catch (e) {
    console.log(e);
  }
}
