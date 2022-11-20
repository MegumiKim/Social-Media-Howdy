import * as API from "../api/index.mjs";

export async function signUpListener() {
  const form = document.querySelector("#sign-up-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const signUpDetails = Object.fromEntries(formData.entries());
      const options = API.makeOptions(form.method, signUpDetails);

      API.registerUser(options);

      // const { accessToken, ...otherDetails } = APIRequest(registerURL, options);

      // console.log(accessToken);
      // // storage.save("accessToken", accessToken);
      // // storage.save("otherDetails", otherDetails);
      // // console.log(otherDetails);
    });
  }
}
