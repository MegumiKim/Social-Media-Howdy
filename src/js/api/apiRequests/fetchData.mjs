// import { BASE_URL } from "../constants.mjs";
import { saveToSessionStorage } from "../../storage/save.mjs";
import { authOption } from "../makeOptions.mjs";

// const postsURL = `${BASE_URL}/posts`;

export async function fetchData(url) {
  try {
    const options = authOption();
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
