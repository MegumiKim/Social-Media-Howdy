import * as requests from "../api/index.mjs";
import * as constants from "../api/constants.mjs";
import { SinglePost } from "../Class/index.mjs";
import { checkIfItsMe } from "../utils/checkIfItsMe.mjs";
import { errorMessage } from "../templates/index.mjs";
import { forceLogIn } from "../utils/forceLogIn.mjs";
import { getParam } from "../utils/getParam.mjs";

const container = document.querySelector("#post-container");

/**
 * Identify the specific post by id and make a new single post Class.
 */
export async function renderSinglePost() {
  try {
    if (container) {
      forceLogIn();
      container.innerHTML = "";
      const id = getParam("id");

      const singlePostURL = `${constants.BASE_URL}/posts/${id}?_author=true&_comments=true&_count=true`;
      const post = await requests.fetchData(singlePostURL);
      const author = post.author.name;
      const itsMe = checkIfItsMe(author);

      const pageTitle = document.querySelector("title");
      pageTitle.innerHTML = `HOWDY | ${post.title}`;
      if (!post.media) {
        post.media = constants.blankPostImgURL;
      }

      const singlePost = new SinglePost(post, itsMe);

      singlePost.render(container);
      singlePost.postComment();
      singlePost.edit();
      singlePost.delete();
      singlePost.likePost();
    }
  } catch (error) {
    errorMessage(container);
  }
}
