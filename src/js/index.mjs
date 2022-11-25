import * as listeners from "./listeners/index.mjs";
import * as posts from "./posts/index.mjs";
import * as profile from "./profiles/index.mjs";

listeners.signUpListener();
listeners.loginListener();
listeners.createPostListener();
// listeners.postCommentListener();
// listeners.editProfileListener();

posts.renderPosts();
posts.renderSinglePost();
posts.renderMyPosts();
profile.renderProfiles();
profile.renderSingleProfile();
profile.renderUserSpecificPosts();
profile.renderMyProfile();
