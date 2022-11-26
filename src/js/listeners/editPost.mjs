import { editPost } from "../api/posts/index.mjs";
import { renderSinglePost } from "../posts/renderSinglePost.mjs";

const container = document.querySelector("#post-container");

export async function editPostListener() {
  const form = document.querySelector("#editPost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());
    console.log(postData);
    editPost(postData);
    form.reset();
  });
}
