import { load } from "../storage/local.mjs";

export function forceLogIn() {
  if (!load("accessToken")) {
    location.href = "../../../index.html";
  }
}
