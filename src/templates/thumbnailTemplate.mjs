export function thumbnailTemplate(postData) {
  return `<div class='col'><div class="card shadow-sm">
    <div class="card-img-top" style="overflow-y:clip; ">
<img src="${postData.media}" style="width: 100%;" alt="${postData.title}"></img></div>
    <div class="card-body">
      <a class="card-text" href="../post/index.html?id=${postData.id}">${postData.title}</a>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button data-card="view" data-id="${postData.id}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
        </div>
        <small class="text-muted">${postData.date}</small>
      </div>
      </div>
    </div>
    </div>`;
}
