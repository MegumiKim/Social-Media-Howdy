import * as API from "../../api/index.mjs";
import { load } from "../../storage/load.mjs";

export function login() {
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
