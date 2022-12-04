import { loginUser } from "../../api/index.mjs";

export function login() {
  const form = document.querySelector("#login-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const signUpDetails = Object.fromEntries(formData.entries());
      const options = makeOptions(signUpDetails);

      loginUser(options);
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

  return options;
}
