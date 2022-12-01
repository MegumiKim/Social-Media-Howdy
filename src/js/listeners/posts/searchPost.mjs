import * as filters from "../../filters/index.mjs";

export function searchPostListener() {
  const search = document.querySelector("#searchInput");

  if (search) {
    search.addEventListener("keyup", (event) => {
      filters.searchPost(search.value);
    });
  }
}
