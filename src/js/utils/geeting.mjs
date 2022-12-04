import { load } from "../storage/local.mjs";

const container = document.querySelector("#greeting");

export function greeting() {
  if (container) {
    const user = load("otherDetails");
    if (!user) {
      container.innerHTML = `<h1>Howdy!</h1>`;
    }
    container.innerHTML = `<h1>Howdy ${user.name}!</h1>`;
  }
}
