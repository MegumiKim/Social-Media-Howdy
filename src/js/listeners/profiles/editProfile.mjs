import * as requests from "../../api/apiRequests/index.mjs";
import { load } from "../../storage/local.mjs";
import { BASE_URL } from "../../api/constants.mjs";
import { fetchData } from "../../api/apiRequests/index.mjs";

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

      requests.edit(profileData, updateURL);
    });
  }
}
