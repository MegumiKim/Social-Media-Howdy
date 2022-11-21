// export { BASE_URL } from "./api/constants.mjs";

import * as listeners from "./listeners/index.mjs";
import * as storage from "././storage/index.mjs";
import * as posts from "./posts/renderPosts.mjs";
import * as singlePost from "./posts/renderSinglePost.mjs";
listeners.signUpListener();
listeners.loginListener();
listeners.createPostListener();

posts.renderPosts();
singlePost.renderSinglePost();
