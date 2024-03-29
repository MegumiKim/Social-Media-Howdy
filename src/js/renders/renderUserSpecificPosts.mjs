import { fetchData } from "../api/index.mjs";
import { Thumbnail } from "../Class/index.mjs";
import { BASE_URL } from "../api/index.mjs";
import { errorMessage } from "../templates/index.mjs";
import { getParam } from "../utils/getParam.mjs";

const container = document.querySelector("#user-specific-posts-container");

/**
 * Renders the thumbnails of post created by specific profile
 */
export async function renderUserSpecificPosts() {
  try {
    if (container) {
      container.innerHTML = "";
      const name = getParam("name");
      const postsByProfileURL = `${BASE_URL}/profiles/${name}/posts?_author=true&_count=true`;
      const posts = await fetchData(postsByProfileURL);

      if (!posts.length) {
        container.innerHTML = `<h4>No Posts by ${name} 💔</h4>`;
      } else {
        const instances = posts.map((post) => new Thumbnail(post));
        instances.forEach((instance) => {
          instance.render(container);
        });
      }
    }
  } catch (error) {
    errorMessage();
  }
}
