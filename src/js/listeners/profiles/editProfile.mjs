import * as requests from "../../api/apiRequests/index.mjs";

export async function editProfileListener() {
  const form = document.querySelector("#editProfile");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(form);
    const form = event.target;
    const formData = new FormData(form);
    const profileData = Object.fromEntries(formData.entries());

    requests.editProfile(profileData);
  });
}
