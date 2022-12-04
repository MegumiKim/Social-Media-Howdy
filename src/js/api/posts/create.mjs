import { BASE_URL, optionsWithBody } from "../index.mjs";
import {
  renderSingleProfile,
  renderUserSpecificPosts,
} from "../../renders/index.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

const createPostURL = `${BASE_URL}/posts`;

/**
 * Send the data to create a new post.
 * Re-render the page after sending the data.
 *
 * @param {object} postData data input by the user
 */
export async function createPost(postData) {
  try {
    const options = optionsWithBody("POST", postData);
    const response = await fetch(createPostURL, options);
    const result = await response.json();
    console.log(result);
    renderUserSpecificPosts();
  } catch (e) {
    console.log(e);
    errorMessage();
  }
}
