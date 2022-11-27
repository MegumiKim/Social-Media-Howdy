export function postThumbnail(postData) {
  return `
  <div class='col mx-auto my-3' >
  <div class="card shadow-sm thumbnail">
  <a href="../post/index.html?id=${postData.id}">
    <div>
      <div class="card-img-top" style="overflow-y:clip; ">
        <img src="${postData.media}" style="width: 100%;" alt="${postData.title}">
        </img>
      </div>
      <div class="card-body">
        <h5 class="card-text">${postData.title}</h5>
        <div class="justify-content-between align-items-center">       
          <small class="text-muted">${postData.date}</small>
          <p>By ${postData.author}</p>
        </div>
      </div>
      </a>
      </div>
  </div>`;
}
