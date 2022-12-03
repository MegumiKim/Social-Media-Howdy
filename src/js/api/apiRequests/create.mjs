import { BASE_URL } from "../constants.mjs";
import { optionsWithBody } from "../makeOptions.mjs";
import { load } from "../../storage/local.mjs";
import { renderPosts } from "../../renders/renderPosts.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";
const createPostURL = `${BASE_URL}/posts`;

export async function createPost(postData) {
  try {
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = optionsWithBody("POST", postData, auth);
    const response = await fetch(createPostURL, options);
    const result = await response.json();
    console.log(result);
    renderPosts();
  } catch (e) {
    console.log(e);
    errorMessage();
  }
}
