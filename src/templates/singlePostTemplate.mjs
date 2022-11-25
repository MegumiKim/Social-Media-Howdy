export function singlePostTemplate(postData) {
  return `
  <div class='col col-lg-6 m-auto' id='singlePost'>
    <div class="card shadow-sm">
      <div class="card-img-top" style="overflow-y:clip; ">
        <img src="${postData.media}" style="width: 100%;"></img>
      </div>
      <div class="card-body">
        <h3 class="card-text">${postData.title}</h3>
        <p>By ${postData.author}</p>
        <p>${postData.body}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Like</button>
          </div>
          <small class="text-muted">${postData.date}</small>
        </div>
      </div>
    </div>
  </div>`;
}
