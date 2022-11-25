import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
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
      const singlePostURL = `${BASE_URL}/posts/${id}?_author=true&_comments=true`;
      const post = await postsMethod.fetchPosts(singlePostURL);

      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${post.title}`;
      if (!post.media) {
        post.media = "";
      }
      const singlePost = new Class.SinglePostClass(
        post.title,
        post.body,
        post.media,
        post.created,
        post.id,
        post.author.name,
        post.comments
      );

      singlePost.render(container);
      // console.log(singlePost.template);

      // singlePost.logDate(post.created);
    }
  }
}
