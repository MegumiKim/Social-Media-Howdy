import { searchPost } from "../filters/search.mjs";

export function searchPostListener() {
  const search = document.querySelector("#searchInput");

  if (search) {
    search.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();

        searchPost(search.value);
      }
    });
  }
}
