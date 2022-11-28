import { deletePost } from "../api/posts/index.mjs";

/**
 * Listen to submit event and
 * delete the post.
 */
export async function deletePostListener() {
  const form = document.querySelector("#deletePost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    deletePost();
  });
}
