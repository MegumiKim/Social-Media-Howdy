// import "./router.mjs";
import * as listeners from "./listeners/index.mjs";
import * as renders from "./renders/index.mjs";
listeners.logout();
listeners.myProfileLink();

renders.renderPosts();
listeners.oldToNewListener();
listeners.newToOldListener();
listeners.searchPostListener();
listeners.signUp();
listeners.login();
listeners.createPostListener();
listeners.searchUserListener();
renders.renderProfiles();
renders.renderSingleProfile();
renders.renderUserSpecificPosts();
renders.renderSinglePost();
