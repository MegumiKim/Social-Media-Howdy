import { BASE_URL } from "../constants.mjs";
import { optionsWithBody } from "../makeOptions.mjs";
import { renderPosts } from "../../renders/renderPosts.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

const createPostURL = `${BASE_URL}/posts`;

export async function createPost(postData) {
  try {
    const options = optionsWithBody("POST", postData);
    const response = await fetch(createPostURL, options);
    const result = await response.json();
    console.log(result);
    renderPosts();
  } catch (e) {
    console.log(e);
    errorMessage();
  }
}
