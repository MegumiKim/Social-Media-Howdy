import * as requests from "../api/apiRequests/index.mjs";
import * as Class from "../Class/index.mjs";
import * as constants from "../api/constants.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { errorMessage } from "../templates/errorMessage.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";

const container = document.querySelector("#post-container");

/**
 * Identify the specific post by id and make a new single post Class.
 */
export async function renderSinglePost() {
  try {
    if (container) {
      forceLogIn();
      const url = new URL(location.href);
      const id = url.searchParams.get("id");

      const singlePostURL = `${constants.BASE_URL}/posts/${id}?_author=true&_comments=true&_count=true`;
      const post = await requests.fetchData(singlePostURL);
      const author = post.author.name;
      const itsMe = checkIfItsMe(author);

      console.log(post._count);

      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${post.title}`;
      if (!post.media) {
        post.media = constants.blankPostImgURL;
      }

      const singlePost = new Class.SinglePost(
        post.title,
        post.body,
        post.media,
        post.tags,
        post.created,
        post.id,
        post.author.name,
        post.comments,
        post._count,
        itsMe
      );

      singlePost.render(container);
      singlePost.postComment();
      singlePost.edit();
      singlePost.delete();
      singlePost.likePost();
    }
  } catch (error) {
    errorMessage(container);
    console.log(error);
  }
}
