import { optionsWithBody } from "../makeOptions.mjs";
import { renderSingleProfile } from "../../renders/renderSingleProfile.mjs";

export async function editProfile(postData, url) {
  const options = optionsWithBody("PUT", postData);
  const response = await fetch(url, options);
  const result = await response.json();

  renderSingleProfile();
}
