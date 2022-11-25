import { BASE_URL } from "../constants.mjs";
import { makeOptions } from "../makeOptions.mjs";
import { load } from "../../storage/load.mjs";

export async function editProfile(postData) {
  const name = load("otherDetails").name;

  if (!name) {
    console.log("no name");
  } else {
    const editProfileURL = `${BASE_URL}/profiles/${name}/media`;

    try {
      const token = load("accessToken");
      const auth = `Bearer ${token}`;
      const options = makeOptions("PUT", postData, auth);
      const response = await fetch(editProfileURL, options);
      console.log(response);

      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}
