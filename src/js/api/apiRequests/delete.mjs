import { BASE_URL } from "../constants.mjs";
import { authOption } from "../makeOptions.mjs";

export async function deletePost() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const deletePostURL = `${BASE_URL}/posts/${id}`;

  try {
    const options = authOption("DELETE");
    const response = await fetch(deletePostURL, options);
    if (response.ok) {
      window.alert("post deleted");
      window.location.replace("../../../../posts/index.html");
    } else {
      window.alert("failed to delete");
    }
  } catch (e) {
    console.log(e);
  }
}
