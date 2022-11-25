import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
// import userProfileClass from "../Class/userProfileClass.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { load } from "../storage/load.mjs";

const container = document.querySelector("#my-posts-container");

export async function renderMyPosts() {
  if (container) {
    const myName = load("otherDetails").name;
    const url = new URL(location.href);
    const nameInQuery = url.searchParams.get("name");

    if (myName === nameInQuery) {
      console.log("its me");
    } else {
      console.log("not me");
    }
    console.log(myName);
    if (!nameInQuery) {
      container.innerHTML =
        "<h3>An error occurred. Go back to the previous page</h3>";
    } else {
      const postsByProfileURL = `${BASE_URL}/profiles/${nameInQuery}/posts`;

      const posts = await postsMethod.fetchPosts(postsByProfileURL);

      posts.forEach((post) => {
        if (!post.media) {
          post.media = "https://picsum.photos/300/200";
        }
        const card = new Class.ThumbnailClass(
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
