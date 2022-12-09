<div
  class="modal fade"
  id="exampleModal"
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
</div>;
