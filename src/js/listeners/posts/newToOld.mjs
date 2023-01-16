import * as sorts from "../../filters/filters/index.mjs";
import { Thumbnail } from "../../Class/Thumbnail.mjs";
import { load } from "../../storage/session.mjs";
const container = document.querySelector("#posts-container");

export function newToOldListener() {
  const sortBtn = document.querySelector("#new-to-old-btn");

  if (sortBtn) {
    sortBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let posts = load("cached-posts");
      posts = sorts.newToOld(posts);

      container.innerHTML = "";
      const instances = posts.map((post) => new Thumbnail(post));
      instances.forEach((instance) => instance.render(container));
    });
  }
}
