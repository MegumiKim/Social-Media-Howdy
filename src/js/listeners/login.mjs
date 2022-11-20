import * as API from "../api/index.mjs";

export function loginListener() {
  const form = document.querySelector("#login-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const signUpDetails = Object.fromEntries(formData.entries());
      const options = API.makeOptions(form.method, signUpDetails);
      console.log(formData);
      API.loginUser(options);
    });
  }
}
