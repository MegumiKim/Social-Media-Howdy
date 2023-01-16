import { BASE_URL } from "../constants.mjs";
import { optionsWithBody } from "../makeOptions.mjs";
import { renderSinglePost } from "../../renders/renderSinglePost.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

export async function postComment(postData) {
  try {
    const id = getParam("id");
    const postCommentURL = `${BASE_URL}/posts/${id}/comment`;
    const options = optionsWithBody("POST", postData);
    const response = await fetch(postCommentURL, options);
    const result = await response.json();

    renderSinglePost();
  } catch (e) {
    errorMessage();
  }
}
