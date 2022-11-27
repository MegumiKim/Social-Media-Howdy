import { load } from "../storage/load.mjs";

export function myProfileLink() {
  const myProfileLink = document.querySelector("#my-profile-link");

  if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
      const myName = load("otherDetails").name;
      window.location.replace(`../../../profile/index.html?name=${myName}`);
    });
  }
}
