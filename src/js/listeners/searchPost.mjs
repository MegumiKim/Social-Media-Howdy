import { searchPost } from "../filters/search.mjs";

export function searchPostListener() {
  const search = document.querySelector("#searchInput");

  if (search) {
    search.addEventListener("keyup", (event) => {
      searchPost(search.value);
    });
  }
}
