import * as postsMethod from "../api/posts/index.mjs";
import thumbnail from "./thumbnail.mjs";
const container = document.querySelector("#posts-container");
export async function renderPosts() {
  const posts = await postsMethod.fetchPosts();

  posts.forEach((post) => {
    const card = new thumbnail(
      post.title,
      post.body,
      post.media,
      post.created,
      post.id
    );
    card.render(container);
  });
}
