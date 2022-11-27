import { deletePost } from "../api/posts/index.mjs";

export async function deletePostListener() {
  const form = document.querySelector("#deletePost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    deletePost();
  });
}
