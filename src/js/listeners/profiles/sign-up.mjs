import * as API from "../../api/index.mjs";

/**
 * Listen to submit event and
 * pass the input value to registerUser function.
 */
export async function signUp() {
  const form = document.querySelector("#sign-up-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const signUpDetails = Object.fromEntries(formData.entries());
      const options = API.optionsWithBody(form.method, signUpDetails);

      API.registerUser(options);
    });
  }
}
