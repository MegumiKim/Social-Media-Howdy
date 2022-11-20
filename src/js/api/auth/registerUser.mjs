import { BASE_URL } from "../constants.mjs";
import { loginUser } from "./loginUser.mjs";

const registerURL = `${BASE_URL}/auth/register`;
const userAlert = document.querySelector("#user-alert");

/**
 * API call to register new user
 * @param {string} url
 * @param {*} userData
 * ```js
 * registerUser(registerUrl, options);
 * ```
 */
export async function registerUser(options) {
  userAlert.innerHTML = "";
  try {
    const response = await fetch(registerURL, options);
    console.log(response);

    const json = await response.json();
    const { id } = json;

    if (id) {
      // after registration login user automatically
      loginUser(options);
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