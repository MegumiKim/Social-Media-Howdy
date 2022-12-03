import * as requests from "../../api/apiRequests/index.mjs";
import { renderPosts } from "../../renders/renderPosts.mjs";

/**
 * Listen to submit event on create post form and
 * pass the input value to createPost function.
 */
export async function createPostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // const form = event.target;
      const formData = new FormData(form);
      let post = Object.fromEntries(formData.entries());
      post.tags = post.tags.split(",");
      console.log(post);
      requests.createPost(post);
      form.reset();
    });
  }
}
