import { BASE_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const registerURL = `${BASE_URL}auth/login`;
const userAlert = document.querySelector("#user-alert");

/**
 * API call to log in registered user
 * @param {string} url
 * @param {*} userData
 * ```js
 * loginUser(options);
 * ```
 */
export async function loginUser(options) {
  userAlert.innerHTML = "";
  try {
    const response = await fetch(registerURL, options);
    console.log(response);

    const json = await response.json();
    const { accessToken, ...otherDetails } = json;

    if (accessToken) {
      storage.save("accessToken", accessToken);
      storage.save("otherDetails", otherDetails);
      window.location.href = "../../../../posts/index.html";
    } else {
      const { errors } = json;
      errors.forEach(({ message }) => {
        userAlert.style.display = "block";
        userAlert.classList.add("alert-warning");
        userAlert.innerHTML += message;
      });
    }
  } catch (e) {
    console.log(e);
  }
}

//   testUser = {
//   name: "user_name",
//   email: "megumi.kimura@stud.noroff.no",
//   password: "PassWord123",
// };
