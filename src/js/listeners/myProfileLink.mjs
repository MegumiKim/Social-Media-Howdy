import { load } from "../storage/load.mjs";

export function myProfileLinkListener() {
  const myProfileLink = document.querySelector("#my-profile-link");

  if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
      console.log("link clicked");
      const myName = load("otherDetails").name;
      window.location.replace(`../../../profile/index.html?name=${myName}`);
    });
  }
}
