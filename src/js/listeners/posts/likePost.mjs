import * as requests from "../../api/apiRequests/index.mjs";

/**
 * Listen to click of the likeBtn on a post.
 */
export async function likePostListener() {
  const likeBtn = document.querySelector("#likeBtn");

  if (likeBtn) {
    likeBtn.addEventListener("click", (event) => {
      requests.likePost();
    });
  }
}
