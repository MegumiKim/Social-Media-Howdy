import * as API from "../../api/index.mjs";

export function login() {
  const form = document.querySelector("#login-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const signUpDetails = Object.fromEntries(formData.entries());
      const options = API.optionsWithBody(form.method, signUpDetails);
      console.log(formData);
      API.loginUser(options);
    });
  }
}
