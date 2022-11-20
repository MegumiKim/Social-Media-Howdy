// export { BASE_URL } from "./api/constants.mjs";

import * as listeners from "./listeners/index.mjs";
import * as storage from "././storage/index.mjs";
import * as posts from "./posts/renderPosts.mjs";

listeners.signUpListener();
listeners.loginListener();
listeners.createPostListener();

posts.renderPosts();
