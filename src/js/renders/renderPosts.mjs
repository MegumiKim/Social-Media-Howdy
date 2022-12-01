import * as requests from "../api/apiRequests/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../../templates/errorMessage.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
import { saveToSessionStorage } from "../storage/save.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts?_author=true`;

/**
 * Get data from API and create post thumbnail Class.
 */
export async function renderPosts() {
  try {
    if (container) {
      forceLogIn();
      const posts = await requests.fetchData(postsURL);
      saveToSessionStorage("cached-posts", posts);

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
