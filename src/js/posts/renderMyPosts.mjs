import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
// import userProfileClass from "../Class/userProfileClass.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { load } from "../storage/load.mjs";

const container = document.querySelector("#my-posts-container");

export async function renderMyPosts() {
  if (container) {
    const name = load("otherDetails").name;

    if (!name) {
      container.innerHTML =
        "<h3>An error occurred. Go back to the previous page</h3>";
    } else {
      const postsByProfileURL = `${BASE_URL}/profiles/${name}/posts`;
      console.log(postsByProfileURL);

      const posts = await postsMethod.fetchPosts(postsByProfileURL);
      console.log(posts.length);

      posts.forEach((post) => {
        if (!post.media) {
          post.media = "https://picsum.photos/300/200";
        }
        const card = new Class.thumbnailClass(
          post.title,
          post.body,
          post.media,
          post.created,
          post.id
        );

        card.render(container);
      });
    }
  }
}
