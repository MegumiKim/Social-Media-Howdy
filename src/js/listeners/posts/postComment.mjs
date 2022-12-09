import * as requests from "../../api/posts/index.mjs";

/**
 * Listen to submit event on comment form and
 * pass the input value to postComment function and reset the form.
 */
export async function postCommentListener() {
  const form = document.querySelector("#comment");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      requests.postComment(post);
      form.reset();
    });
  }
}
