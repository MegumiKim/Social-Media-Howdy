import { blankPostImgURL } from "../js/api/constants.mjs";

export function postThumbnail(postData) {
  return `
  <div class='col mx-auto my-3' >
    <div class="card shadow-sm thumbnail">
      <a href="../post/?id=${postData.id}">
        <div class="d-flex">
          <div class="card-img-top" style="overflow:clip; width:300px; height:300px;" width="300px" height="300px">
            <img src="${postData.media}"  alt="${postData.title}"
            onerror="this.onerror=null;this.src='${blankPostImgURL}'" width="100%">
            </img>
          </div>
          <div class="card-body">
            <h5 class="card-text">${postData.title}</h5>
            <div class="justify-content-between align-items-center">       
              <small class="text-muted">${postData.date}</small>
              <p>By ${postData.author}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>`;
}
