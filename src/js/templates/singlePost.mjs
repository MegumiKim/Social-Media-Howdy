export function singlePost(postData) {
  return `
  <div class='col col-lg-8 m-auto' id='singlePost'>
    <div class="card shadow-sm">
      <div class="card-img-top" style="overflow:hidden; max-height:500px;">
        <img src="${postData.media}" class="h-100 w-100"></img>
      </div>
      <div class="card-body p-5">
        <h3 class="card-text">${postData.title}</h3>
        <a href="../../../profile/?name=${postData.author}">By ${postData.author}</a>
        <p>${postData.body}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group mb-3">
            <button id="likeBtn" type="button" class="btn btn-sm btn-outline-secondary" aria-label="like button likes count ${postData.reactionsCount}">🧡 ${postData.reactionsCount}</button>
            <!-- Button trigger modal -->
            <button id="editBtn" style="display:none" type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modal-edit-form">
            Edit Post
            </button>
            <button id="deleteBtn" style="display:none" type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modal-delete-form">Delete</button>
          </div>
          <small class="text-muted">${postData.date}</small>
          </div>
          <div class='fst-italic'>${postData.tags}</div>

        <form class="col mt-4 m-auto" id="comment">
        <div class="form-group mb-3">
          <label for="comment-input">Comment</label>
          <textarea
            id="comment-input"
            type="text"
            class="form-control"
            name="body"
            required
            max-length="150"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Post comment</button>
      </form>
      
        <!-- Modal Delete Form-->
        <div class="modal fade" id="modal-delete-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Post</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form class="modal-body gx-1" id="deletePost">
                  <p>Are you sure you want to delete the post?<p>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Delete</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

        <!-- Modal Edit Form-->
        <div class="modal fade" id="modal-edit-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit post</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form class="modal-body gx-1" id="editPost">
                    <div class="form-group mb-3">
                      <label for="">Title</label>
                      <input type="text" class="form-control" name="title">
                    </div>
                    <div class="form-group mb-3">
                      <label for="">Texts</label>
                      <textarea type="text" class="form-control" name="body" max-length="150"></textarea>
                    </div>
                    <div class="form-group mb-3">
                    <label for="">Tag</label>
                    <input type="text" class="form-control" name="tags" >
                    </div>
                    <div class="form-group mb-3">
                      <label for="">Media URL (if not provided, random image will be applied)</label>
                      <input type="url"  class="form-control" name="media" >
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Update</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>`;
}
