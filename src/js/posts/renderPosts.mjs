import * as postsMethod from "../api/posts/index.mjs";
import thumbnail from "./thumbnailClass.mjs";
import { BASE_URL } from "../api/constants.mjs";
import thumbnailClass from "./thumbnailClass.mjs";
import { thumbnailTemplate } from "../../templates/thumbnailTemplate.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts`;

export async function renderPosts() {
  if (container) {
    const posts = await postsMethod.fetchPosts(postsURL);

    posts.forEach((post) => {
      if (!post.media) {
        post.media = "https://picsum.photos/300/200";
      }
      const card = new thumbnailClass(
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
