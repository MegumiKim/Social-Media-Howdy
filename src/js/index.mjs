import * as listeners from "./listeners/index.mjs";
import * as posts from "./posts/index.mjs";
import * as profile from "./profiles/index.mjs";

listeners.signUp();
listeners.login();
listeners.createPostListener();
listeners.myProfileLink();

posts.renderPosts();
posts.renderSinglePost();

profile.renderProfiles();
profile.renderSingleProfile();
profile.renderUserSpecificPosts();
