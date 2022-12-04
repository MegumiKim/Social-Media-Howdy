import { registerUser } from "../../api/index.mjs";

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
      const options = makeOptions(signUpDetails);

      registerUser(options);
    });
  }
}

function makeOptions(body) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  console.log(options);
  return options;
}
