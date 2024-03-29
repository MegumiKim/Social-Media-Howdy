import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../../api/constants.mjs";
import { fetchData } from "../../api/index.mjs";
import { editProfile } from "../../api/profiles/index.mjs";

/**
 * Listen to form submit event and update the profile images
 */
export async function editProfileListener() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const name = load("otherDetails").name;
    const profileURL = `${BASE_URL}/profiles/${name}`;
    const updateURL = `${profileURL}/media`;
    const profile = await fetchData(profileURL);

    form.avatar.value = profile.avatar;
    form.banner.value = profile.banner;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profileData = Object.fromEntries(formData.entries());

      editProfile(profileData, updateURL);
    });
  }
}
