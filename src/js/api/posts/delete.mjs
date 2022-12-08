import { load } from "../../storage/local.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { BASE_URL } from "../constants.mjs";
import { optionsWithoutBody } from "../makeOptions.mjs";

export async function deletePost() {
  const id = getParam("id");
  const deletePostURL = `${BASE_URL}/posts/${id}`;
  const myName = load("otherDetails").name;

  try {
    const options = optionsWithoutBody("DELETE");
    const response = await fetch(deletePostURL, options);

    if (response.ok) {
      window.location.replace(`../../../profile/?name=${myName}`);
    } else {
      throw new Error("failed to delete");
    }
  } catch (e) {
    errorMessage();
  }
}
