import * as requests from "../api/apiRequests/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL, blankPostImgURL } from "../api/constants.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { getParam } from "../utils/getParam.mjs";

const container = document.querySelector("#user-specific-posts-container");

export async function renderUserSpecificPosts() {
  try {
    if (container) {
      const name = getParam("name");
      const postsByProfileURL = `${BASE_URL}/profiles/${name}/posts?_author=true&_count=true`;
      const posts = await requests.fetchData(postsByProfileURL);

      if (!posts.length) {
        container.innerHTML = `<h4>No Posts by ${name} :-(</3>`;
      } else {
        posts.forEach(({ title, media, tags, created, id, author, _count }) => {
          if (!media) {
            media = `${blankPostImgURL}`;
          }
          const card = new Class.Thumbnail(
            title,
            media,
            tags,
            created,
            id,
            author.name,
            _count
          );
          card.render(container);
        });
      }
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
