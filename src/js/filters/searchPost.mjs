import { errorMessage } from "../templates/index.mjs";
import { Thumbnail } from "../Class/Thumbnail.mjs";
import { load } from "../storage/session.mjs";
import * as filters from "./filters/index.mjs";

const container = document.querySelector("#posts-container");

export function searchPost(searchValue) {
  try {
    let posts = load("cached-posts");

    container.innerHTML = "";
    posts = posts.filter((post) => filters.postsFilter(post, searchValue));
    console.log(posts);

    if (posts.length) {
      posts.forEach((post) => {
        const card = new Thumbnail(
          post.title,
          // post.body,
          post.media,
          post.tags,
          post.created,
          post.id,
          post.author.name,
          post._count
        );
        card.render(container);
      });
    } else {
      container.innerHTML = `<div class="col m-auto"><h3>No result for "${searchValue}"</h3></div>`;
    }
  } catch (error) {
    errorMessage(container);
  }
}
