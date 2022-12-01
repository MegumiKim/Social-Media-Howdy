import { load } from "../storage/load.mjs";

export function forceLogIn() {
  if (!load("accessToken")) {
    location.href = "../../../index.html";
  }
}
