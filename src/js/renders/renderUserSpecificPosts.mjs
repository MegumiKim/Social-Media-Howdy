import * as requests from "../api/apiRequests/index.mjs";
import * as Class from "../Class/index.mjs";
import { BASE_URL, blankPostImgURL } from "../api/constants.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";

const container = document.querySelector("#user-specific-posts-container");

export async function renderUserSpecificPosts() {
  try {
    if (container) {
      const url = new URL(location.href);
      const name = url.searchParams.get("name");
      const itsMe = checkIfItsMe(name);

      const postsByProfileURL = `${BASE_URL}/profiles/${name}/posts?_author=true&_count=true`;
      const posts = await requests.fetchData(postsByProfileURL);

      if (!posts.length) {
        container.innerHTML = `<h3>No Posts by ${name} :-(</3>`;
      } else {
        posts.forEach(({ title, body, media, created, id, author, _count }) => {
          if (!media) {
            media = `${blankPostImgURL}`;
          }
          const card = new Class.Thumbnail(
            title,
            body,
            media,
            created,
            id,
            author.name,
            _count
            // itsMe
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
