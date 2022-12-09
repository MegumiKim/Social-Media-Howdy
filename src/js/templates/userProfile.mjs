import { blankPostImgURL, blankUserImgURL } from "../api/constants.mjs";

export function userProfileTemplate(profile) {
  return `<div class="card m-auto mb-4 p-4" >
  <div>

    <div class="d-flex mb-3">
      <img class="m-auto" src="${profile.banner}" onerror="this.onerror=null;this.src='${blankPostImgURL}';"  width="600" height="200"  alt="banner for ${profile.name}" width="100%" class="h-100 w-100" style="object-position: center center; object-fit: cover">
    </div>

    <div class="card-body d-flex flex-wrap align-items-center justify-content-center" style="text-align:center">
    <img class="rounded-circle" src="${profile.avatar}" onerror="this.onerror=null;this.src='${blankUserImgURL}';" alt="${profile.name}" width="200" height="200" class="h-100 w-100" style="object-position: center center; object-fit: cover">
      
    <div class="m-4">
      <h2>${profile.name}</h2>
      <p>${profile.email}</p>
      <div class="mb-3">${profile.counts.followers} followers | ${profile.counts.following} following | ${profile.counts.posts} posts </div>

      <button id="follow-btn" class="btn btn-primary d-none " >Follow ${profile.name}</button>
      <button id="unfollow-btn" class="btn btn-secondary d-none ">Unfollow ${profile.name}</button>
      
          <!-- Button trigger modal -->
          <button id="editProfileBtn" type="button" class="btn btn-secondary m-auto d-none" data-bs-toggle="modal" data-bs-target="#edit-profile-modal">
            Change Profile Images
          </button>
    </div>
    </div>
  </div>

  <!-- Edit Profile modal -->
  <div
  class="modal fade"
  id="edit-profile-modal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Update Profile Images
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form method="PUT" id="editProfile">
          <div class="form-group mb-3">
            <label for="">Avatar URL</label>
            <input type="url" class="form-control" name="avatar"></input>
          </div>
          <div class="form-group mb-3">
            <label for="">Banner </label>
            <input type="url" class="form-control" name="banner"></input>
          </div>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
            Save changes
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

</div>`;
}
