import { load } from "../storage/local.mjs";

/**Prevent user to visit the auth-restricted pages without access token */
export function forceLogIn() {
  console.log("canceled");

  // if (!load("accessToken")) {
  //   location.href = "../../../index.html";
  // }
}
