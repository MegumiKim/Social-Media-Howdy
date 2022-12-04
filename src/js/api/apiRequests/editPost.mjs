import { optionsWithBody } from "../makeOptions.mjs";
import { renderSinglePost } from "../../renders/renderSinglePost.mjs";

export async function editPost(postData, url) {
  try {
    const method = "PUT";
    const options = optionsWithBody(method, postData);
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    renderSinglePost();
  } catch (e) {
    console.log(e);
  }
}
