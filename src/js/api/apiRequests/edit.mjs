import { BASE_URL } from "../constants.mjs";
import { makeOptions } from "../makeOptions.mjs";
import { load } from "../../storage/load.mjs";

export async function editPost(postData) {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const editPostURL = `${BASE_URL}/posts/${id}`;

  try {
    const token = load("accessToken");
    const auth = `Bearer ${token}`;
    const options = makeOptions("PUT", postData, auth);
    const response = await fetch(editPostURL, options);
    console.log(response);

    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
