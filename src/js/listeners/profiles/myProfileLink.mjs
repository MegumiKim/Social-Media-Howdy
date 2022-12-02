import { load } from "../../storage/local.mjs";

/**
 * Add user name in query parameter
 * in URL and jump to user's profile page
 *
 */
export function myProfileLink() {
  const myProfileLink = document.querySelector("#my-profile-link");

  if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
      const myName = load("otherDetails").name;
      window.location.replace(`../../../profile/?name=${myName}`);
    });
  }
}
