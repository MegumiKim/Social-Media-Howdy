import { fetchData } from "../api/index.mjs";
import { Thumbnail } from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
import { save } from "../storage/session.mjs";

const container = document.querySelector("#posts-container");
const postsURL = `${BASE_URL}/posts?_author=true&_count=true`;

/**
 * Get data from API and create post thumbnail Class.
 */
export async function renderPosts() {
  try {
    if (container) {
      forceLogIn();
      container.innerHTML = "";
      const posts = await fetchData(postsURL);
      save("cached-posts", posts);

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
    }
  } catch (error) {
    errorMessage(container);
  }
}
