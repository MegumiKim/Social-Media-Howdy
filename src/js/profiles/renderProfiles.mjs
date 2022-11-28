import * as postsMethod from "../api/posts/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL } from "../api/constants.mjs";

const container = document.querySelector("#profiles-container");
const profileURL = `${BASE_URL}/profiles`;

export async function renderProfiles() {
  try {
    if (container) {
      const profiles = await postsMethod.fetchPosts(profileURL);

      profiles.forEach(({ name, email, banner, avatar }) => {
        // if (!avatar) {
        //   avatar = "https://picsum.photos/id/141/2048/1365";
        // }
        const card = new Class.UserThumbnail(name, email, banner, avatar);

        card.render(container);
      });
    }
  } catch (error) {
    container.innerHTML = `<div class="col"><h3>An error occurred. Go back to the previous page</h3>
  <button class='btn btn-secondary' onclick="history.back()">Back</button></div>`;
    console.log(error);
  }
}

// import { BASE_URL } from "../api/constants.mjs";
// import { fetchPosts } from "../api/posts/fetchPosts.mjs";

// const profileURL = `${BASE_URL}/profiles`;
// console.log(profileURL);

// export async function renderProfiles() {
//   const profiles = await fetchPosts(profileURL);
//   console.log(profiles);
// }
