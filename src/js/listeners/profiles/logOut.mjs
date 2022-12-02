import { remove } from "../../storage/local.mjs";

export function logout() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      remove("accessToken");
      window.location.replace("/");
    });
  }
}
