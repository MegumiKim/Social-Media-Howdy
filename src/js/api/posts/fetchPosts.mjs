// import { BASE_URL } from "../constants.mjs";
import { authOption } from "../makeOptions.mjs";

// const postsURL = `${BASE_URL}/posts`;

export async function fetchPosts(url) {
  try {
    const options = authOption();
    console.log(options);

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
