import * as listeners from "./listeners/index.mjs";
import * as renders from "./renders/index.mjs";

listeners.signUp();
listeners.login();
listeners.createPostListener();
listeners.myProfileLink();
listeners.searchPostListener();

renders.renderPosts();
renders.renderSinglePost();
renders.renderProfiles();
renders.renderSingleProfile();
renders.renderUserSpecificPosts();
