import * as postsMethod from "../api/posts/index.mjs";
import singlePostClass from "./singlePostClass.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#post-container");

export async function renderSinglePost() {
  if (container) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (!id) {
      container.innerHTML =
        "<h3>An error occurred. Go back to the previous page</2>";
    } else {
      const singlePostURL = `${BASE_URL}/posts/ ${id}`;
      const post = await postsMethod.fetchPosts(singlePostURL);
      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${post.title}`;
      if (!post.media) {
        post.media = "";
      }
      const singlePost = new singlePostClass(
        post.title,
        post.body,
        post.media,
        post.created,
        post.id
      );

      singlePost.render(container);
      // singlePost.logDate(post.created);
    }
  }
}
