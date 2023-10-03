import { load } from "../storage/local.mjs";

/**Prevent user to visit the auth-restricted pages without access token */
export function forceLogIn() {
  // if (!load("accessToken")) {
  //   location.href = "../../../index.html";
  // }
}
