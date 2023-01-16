import * as listeners from "./listeners/index.mjs";
import * as renders from "./renders/index.mjs";

listeners.logout();
listeners.myProfileLink();

const path = location.pathname;

if (path === "/posts/") {
  renders.renderPosts();
  listeners.oldToNewListener();
  listeners.newToOldListener();
  listeners.searchPostListener();
} else if (path === "/sign-up/") {
  listeners.signUp();
} else if (path === "/") {
  listeners.login();
} else if (path === "/profile/") {
  listeners.createPostListener();
  listeners.searchUserListener();
  renders.renderProfiles();
  renders.renderSingleProfile();
  renders.renderUserSpecificPosts();
} else if (path === "/post/") {
  renders.renderSinglePost();
}
