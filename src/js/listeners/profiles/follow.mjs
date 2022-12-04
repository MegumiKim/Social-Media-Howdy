import * as requests from "../../api/profiles/index.mjs";

/**
 * Listen to click of the follow user btn
 */
export async function followListener() {
  const followBtn = document.querySelector("#follow-btn");

  if (followBtn) {
    followBtn.addEventListener("click", (event) => {
      requests.followUser();
    });
  }
}
