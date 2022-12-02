import { BASE_URL } from "../constants.mjs";
import { makeOptions } from "../makeOptions.mjs";
import { load } from "../../storage/local.mjs";
const createPostURL = `${BASE_URL}/posts`;

export async function createPost(postData) {
  try {
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = makeOptions("POST", postData, auth);
    const response = await fetch(createPostURL, options);

    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
