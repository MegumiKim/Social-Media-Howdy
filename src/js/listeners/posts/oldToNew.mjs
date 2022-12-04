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
      posts.forEach((post) => {
        const card = new Thumbnail(
          post.title,
          post.media,
          post.tags,
          post.created,
          post.id,
          post.author.name,
          post._count
        );
        card.render(container);
      });
    });
  }
}
