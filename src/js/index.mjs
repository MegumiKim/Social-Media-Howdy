// export { BASE_URL } from "./api/constants.mjs";

import * as listeners from "./listeners/index.mjs";
import * as posts from "./posts/index.mjs";
import * as profile from "./profiles/index.mjs";
listeners.signUpListener();
listeners.loginListener();
listeners.createPostListener();

posts.renderPosts();
posts.renderSinglePost();
profile.renderProfiles();
profile.renderSingleProfile();
