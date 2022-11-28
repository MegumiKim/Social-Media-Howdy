import { blankUserImgURL } from "../js/api/constants.mjs";

export function userThumbnail(profile) {
  return `
  <a href="index.html?name=${profile.name}" class="list-group-item list-group-item-action py-3" aria-current="true">
  <img src="${profile.avatar}" alt="${profile.name}" onerror="this.onerror=null;this.src='${blankUserImgURL}';" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32">
  
  <div class="d-flex w-100 justify-content-between small lh-sm text-muted">
    <div>
      <strong class="text-gray-dark">${profile.name}</strong>
      <p class="mb-0 opacity-75">${profile.email}</p>
    </div>
    </div>
    </a>
`;
}
