import * as listeners from "./listeners/index.mjs";
import * as renders from "./renders/index.mjs";

listeners.signUp();
listeners.login();
listeners.createPostListener();
listeners.myProfileLink();
listeners.searchPostListener();
listeners.searchUserListener();
listeners.oldToNewListener();
listeners.newToOldListener();
listeners.logout();

renders.renderPosts();
renders.renderSinglePost();
renders.renderProfiles();
renders.renderFollowers();
renders.renderFollowing();
renders.renderSingleProfile();
renders.renderUserSpecificPosts();
