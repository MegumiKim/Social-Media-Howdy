import * as requests from "../../api/apiRequests/index.mjs";

/**
 * Listen to click of the likeBtn on a post.
 */
export async function unfollowListener() {
  const unfollowBtn = document.querySelector("#unfollow-btn");

  if (unfollowBtn) {
    unfollowBtn.addEventListener("click", (event) => {
      requests.unfollowUser();
    });
  }
}
