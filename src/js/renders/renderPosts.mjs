import { fetchData } from "../api/index.mjs";
import { Thumbnail } from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
import { save } from "../storage/session.mjs";
import { greeting } from "../utils/geeting.mjs";

const container = document.querySelector("#posts-container");
const postsURL = `${BASE_URL}/posts?_author=true&_count=true`;

/**
 * Get data from API and create post thumbnail Class.
 */
export async function renderPosts() {
  try {
    if (container) {
      forceLogIn();
      greeting();

      container.innerHTML = "";
      const posts = await fetchData(postsURL);
      save("cached-posts", posts);

      const instances = posts.map((post) => new Thumbnail(post));
      instances.forEach((instance) => instance.render(container));
    }
  } catch (error) {
    errorMessage(container);
  }
}
