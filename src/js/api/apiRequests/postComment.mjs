import { BASE_URL } from "../constants.mjs";
import { optionsWithBody } from "../makeOptions.mjs";
import { load } from "../../storage/local.mjs";
import { renderSinglePost } from "../../renders/renderSinglePost.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

export async function postComment(postData) {
  try {
    getParam("id");
    const postCommentURL = `${BASE_URL}/posts/${id}/comment`;
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = optionsWithBody("POST", postData, auth);
    const response = await fetch(postCommentURL, options);
    const result = await response.json();
    console.log(result);
    renderSinglePost();
  } catch (e) {
    console.log(e);
    errorMessage();
  }
}
