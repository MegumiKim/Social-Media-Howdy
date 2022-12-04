import { load } from "../storage/local.mjs";

const container = document.querySelector("#greeting");

/**
 * Greet the user with logged in user name
 */
export function greeting() {
  if (container) {
    const user = load("otherDetails");
    if (!user) {
      container.innerHTML = `Howdy!`;
    }
    container.innerHTML = `Howdy ${user.name}!`;
  }
}
