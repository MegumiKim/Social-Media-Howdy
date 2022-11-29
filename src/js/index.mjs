import * as listeners from "./listeners/index.mjs";
import * as renders from "./renders/index.mjs";
import * as filters from "./filters/index.mjs";

listeners.signUp();
listeners.login();
listeners.createPostListener();
listeners.myProfileLink();
listeners.searchPostListener();
listeners.oldToNewListener();
listeners.newToOldListener();
listeners.logout();

renders.renderPosts();
renders.renderSinglePost();
renders.renderProfiles();
renders.renderSingleProfile();
renders.renderUserSpecificPosts();

// filters.test();
