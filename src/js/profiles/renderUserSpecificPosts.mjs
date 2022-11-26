import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
// import userProfileClass from "../Class/userProfileClass.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#user-specific-posts-container");

export async function renderUserSpecificPosts() {
  if (container) {
    const url = new URL(location.href);
    const name = url.searchParams.get("name");

    if (!name) {
      container.innerHTML =
        "<h3>An error occurred. Go back to the previous page</h3>";
    } else {
      const postsByProfileURL = `${BASE_URL}/profiles/${name}/posts`;
      const posts = await postsMethod.fetchPosts(postsByProfileURL);
      console.log(posts);

      posts.forEach((post) => {
        console.log(post);
      });
    }
  }
}