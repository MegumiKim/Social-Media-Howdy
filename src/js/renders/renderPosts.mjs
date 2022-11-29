import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts?_author=true`;

/**
 * Get data from API and create post thumbnail Class.
 */
export async function renderPosts() {
  try {
    if (container) {
      const posts = await postsMethod.fetchPosts(postsURL);

      posts.forEach((post) => {
        const card = new Class.Thumbnail(
          post.title,
          post.body,
          post.media,
          post.created,
          post.id,
          post.author.name
        );
        card.render(container);
      });
    }
  } catch (error) {
    errorMessage(container);
  }
}
