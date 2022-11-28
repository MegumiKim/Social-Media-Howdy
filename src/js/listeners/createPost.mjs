import { createPost } from "../api/posts/create.mjs";

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
      const post = Object.fromEntries(formData.entries());

      createPost(post);
      form.reset();
    });
  }
}
