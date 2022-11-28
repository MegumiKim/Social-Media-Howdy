import { BASE_URL } from "../api/constants.mjs";
import { fetchPosts } from "../api/posts/fetchPosts.mjs";
import { Thumbnail } from "../Class/Thumbnail.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts?_author=true`;

export async function searchPost(searchValue) {
  let posts = await fetchPosts(postsURL);

  container.innerHTML = "";
  posts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.body.toLowerCase().includes(searchValue.toLowerCase())
  );
  posts.forEach((post) => {
    const card = new Thumbnail(
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
