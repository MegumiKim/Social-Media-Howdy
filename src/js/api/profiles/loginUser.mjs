import { BASE_URL } from "./../constants.mjs";
<<<<<<< HEAD
import * as storages from "../../storage/index.mjs";
=======
import * as storages from "./../../storage/index.mjs";
>>>>>>> 3e24b00d5ade7e267ce4d7e3b2de39caddf8e5b9

const registerURL = `${BASE_URL}/auth/login`;
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

  const response = await fetch(registerURL, options);
  const json = await response.json();
  const { accessToken, ...otherDetails } = json;

  if (accessToken) {
    storages.locals.save("accessToken", accessToken);
    storages.locals.save("otherDetails", otherDetails);
<<<<<<< HEAD
    window.location.assign("./posts/index.html");
=======
    window.location.href("./posts/");
    // window.location.assign("./posts/");
>>>>>>> 3e24b00d5ade7e267ce4d7e3b2de39caddf8e5b9
  } else {
    const { errors } = json;
    errors.forEach(({ message }) => {
      userAlert.style.display = "block";
      userAlert.classList.add("alert-warning");
      userAlert.innerHTML += message;
    });
  }
}

//   testUser = {
//   name: "user_name",
//   email: "megumi.kimura@stud.noroff.no",
//   password: "PassWord123",
// };
