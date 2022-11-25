import { BASE_URL } from "../constants.mjs";
import { makeOptions } from "../makeOptions.mjs";
import { load } from "../../storage/load.mjs";

export async function postComment(postData) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const postCommentURL = `${BASE_URL}/posts/${id}/comment`;
  console.log(postCommentURL);
  // const comment = await postsMethod.fetchPosts(postCommentURL);

  try {
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = makeOptions("POST", postData, auth);
    const response = await fetch(postCommentURL, options);

    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
