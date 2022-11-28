import { editPost } from "../api/posts/index.mjs";

/**
 * Listen to submit event and
 * pass the input value to editPost function
 * and reset the form.
 */
export async function editPostListener() {
  const form = document.querySelector("#editPost");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const postData = Object.fromEntries(formData.entries());

    editPost(postData);
    form.reset();
  });
}
