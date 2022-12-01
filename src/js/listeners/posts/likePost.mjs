import * as requests from "../api/apiRequests/index.mjs";

/**
 * Listen to click of the likeBtn on a post.
 */
export async function likePostListener() {
  const likeBtn = document.querySelector("#like");

  if (likeBtn) {
    form.addEventListener("click", (event) => {
      requests.likePost();
    });
  }
}
