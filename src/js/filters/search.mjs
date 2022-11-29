import { errorMessage } from "../../templates/errorMessage.mjs";
import { BASE_URL } from "../api/constants.mjs";
import { fetchPosts } from "../api/posts/fetchPosts.mjs";
import { Thumbnail } from "../Class/Thumbnail.mjs";
import { loadFromSessionStorage } from "../storage/load.mjs";

const container = document.querySelector("#posts-container");

const postsURL = `${BASE_URL}/posts?_author=true`;

export async function searchPost(searchValue) {
  try {
    let posts = await fetchPosts(postsURL);

    // window.location.replace("../../../posts/");
    container.innerHTML = "";
    // posts = posts.filter((post) => filterBySearchWords(post, searchValue));

    posts = posts.filter(
      ({ title, body }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      // ||
      // body.toLowerCase().includes(searchValue.toLowerCase())
    );

    posts.forEach((post) => {
      const card = new Thumbnail(
        post.title,
        post.body,
        post.media,
        post.created,
        post.id,
        post.author.name
      );
      card.render(container);
    });
  } catch (error) {
    errorMessage(container);
  }
}

// function filterBySearchWords(post, searchValue) {
//   if (post.body) {
//     if (
//       post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
//       post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
//       post.author.toLowerCase().includes(searchValue.toLowerCase())
//     ) {
//       return post;
//     }
//   } else if (post.title.toLowerCase().includes(searchValue.toLowerCase()))
//     return post;
// }
//   } else (
//     if(

//       post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
//       post.author.toLowerCase().includes(searchValue.toLowerCase())
//     )
//   ) {
//     return post;
//   }
// }

// posts = posts.filter(
//     ({ id }) =>
//       id === 4426)
// ||
// body.toLowerCase().includes(searchValue.toLowerCase())
