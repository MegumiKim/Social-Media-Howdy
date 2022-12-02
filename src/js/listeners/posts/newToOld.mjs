import * as sorts from "../../filters/filters/index.mjs";
import { Thumbnail } from "../../Class/Thumbnail.mjs";
import { load } from "../../storage/local.mjs";
const container = document.querySelector("#posts-container");

export function newToOldListener() {
  const sortBtn = document.querySelector("#new-to-old-btn");

  if (sortBtn) {
    sortBtn.addEventListener("click", (event) => {
      event.preventDefault();

      let posts = load("cached-posts");
      posts = sorts.newToOld(posts);

      container.innerHTML = "";
      posts.forEach((post) => {
        const card = new Thumbnail(
          post.title,
          post.body,
          post.media,
          post.created,
          post.id,
          post.author.name
        );
        card.render(container);
      });
    });
  }
}
