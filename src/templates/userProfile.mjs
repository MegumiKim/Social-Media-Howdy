import { blankPostImgURL, blankUserImgURL } from "../js/api/constants.mjs";

export function userProfileTemplate(profile) {
  return `
  <div class="card m-auto mb-4 p-4" >
    <div class="d-flex flex-wrap g-3 mb-3">
    <img class=" m-auto" src="${profile.banner}" onerror="this.onerror=null;this.src='${blankPostImgURL}';" width="200" height="200" alt="banner for ${profile.name}" >
    <img class="rounded-circle m-auto" src="${profile.avatar}" onerror="this.onerror=null;this.src='${blankUserImgURL}';" alt="${profile.name}" width="200" height="200">
    </div>
    <h2>${profile.name}</h2>
    <p>${profile.email}</p>

    <!-- Button trigger modal -->
    <button id="editProfileBtn" style="display:none" type="button" class="btn btn-secondary m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Change Profile Images
    </button>
  </img>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Profile Images</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form method='put' id="editProfile">
            <div class="form-group mb-3">
              <label for="">Avatar URL</label>
              <input type="url"  class="form-control" name="avatar" >
            </div>
            <div class="form-group mb-3">
              <label for="">Banner </label>
              <input type="url"  class="form-control" name="banner" >
            </div>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`;
}
