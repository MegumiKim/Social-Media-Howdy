import { searchUser } from "../filters/index.mjs";

export function searchUserListener() {
  const search = document.querySelector("#search-user");

  if (search) {
    search.addEventListener("keyup", (event) => {
      searchUser(search.value);
    });
  }
}
