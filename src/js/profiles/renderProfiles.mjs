import * as postsMethod from "../api/posts/index.mjs";
import { BASE_URL } from "../api/constants.mjs";
import userThumbnailClass from "../Class/userThumbnailClass.mjs";

const container = document.querySelector("#profiles-container");
const profileURL = `${BASE_URL}/profiles`;

export async function renderProfiles() {
  if (container) {
    const profiles = await postsMethod.fetchPosts(profileURL);

    profiles.forEach((profile) => {
      // if (!profile.media) {
      //   profile.media = "https://picsum.photos/300/200";
      // }
      const card = new userThumbnailClass(
        profile.name,
        profile.email,
        profile.banner,
        profile.avatar
      );

      card.render(container);
    });
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
