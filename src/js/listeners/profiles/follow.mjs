import * as requests from "../../api/apiRequests/index.mjs";

/**
 * Listen to click of the likeBtn on a post.
 */
export async function followListener() {
  const followBtn = document.querySelector("#follow-btn");

  if (followBtn) {
    followBtn.addEventListener("click", (event) => {
      requests.followUser();
    });
  }
}
