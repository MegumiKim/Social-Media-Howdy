export function userProfileTemplate(profile) {
  return `
  <div class="card m-auto my-3 p-4" >
  <img class="rounded-circle m-auto" src="${profile.avatar}" alt="${profile.name}" width="140" height="140">
  <h2>${profile.name}</h2>
  <p>${profile.email}.</p>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Edit Profile
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
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
            <button type="submit" class="btn btn-primary">Save changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
`;
}
