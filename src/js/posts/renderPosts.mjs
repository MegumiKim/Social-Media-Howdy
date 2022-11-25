import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts?_author=true`;

export async function renderPosts() {
  if (container) {
    const posts = await postsMethod.fetchPosts(postsURL);
    posts.forEach((post) => {
      if (!post.media) {
        post.media = "https://picsum.photos/300/200";
      }
      const card = new Class.ThumbnailClass(
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
}
