import * as sorts from "../../filters/filters/index.mjs";
import { Thumbnail } from "../../Class/Thumbnail.mjs";
import { load } from "../../storage/session.mjs";
const container = document.querySelector("#posts-container");

export function oldToNewListener() {
  const sortBtn = document.querySelector("#old-to-new-btn");

  if (sortBtn) {
    sortBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let posts = load("cached-posts");
      posts = sorts.oldToNew(posts);

      container.innerHTML = "";
      const instances = posts.map((post) => new Thumbnail(post));
      instances.forEach((instance) => instance.render(container));
    });
  }
}
