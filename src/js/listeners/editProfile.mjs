import { editProfile } from "../api/profile/index.mjs";

export async function editProfileListener() {
  const form = document.querySelector("#editProfile");
  console.log(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("click");
    const form = event.target;
    const formData = new FormData(form);
    const profileData = Object.fromEntries(formData.entries());
    console.log(profileData);
    editProfile(profileData);
  });
}
