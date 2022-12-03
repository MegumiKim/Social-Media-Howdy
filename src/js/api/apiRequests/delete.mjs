import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../constants.mjs";
import { authOption } from "../makeOptions.mjs";

export async function deletePost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const myName = load("otherDetails").name;
  const deletePostURL = `${BASE_URL}/posts/${id}`;

  try {
    const options = authOption("DELETE");
    const response = await fetch(deletePostURL, options);
    if (response.ok) {
      window.location.replace(`../../../profile/?name=${myName}`);
    } else {
      window.alert("failed to delete");
    }
  } catch (e) {
    console.log(e);
  }
}
