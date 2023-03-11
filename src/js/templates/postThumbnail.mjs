import { blankPostImgURL } from "../api/constants.mjs";

export function postThumbnail(postData) {
  return `
  <div class='col thumbnail'>
    <div class="card shadow-sm">
      <a href="../post/?id=${postData.id}">
        <div class="d-flex">
          <div style="overflow:hidden; width:300px; height:300px;">
            <img src="${postData.media}"  alt="${postData.title}"
            onerror="this.onerror=null;this.src='${blankPostImgURL}'" width="100%" class="h-100 w-100" >
            </img>
          </div>
          <div class="card-body" >
            <h5 class="card-text" >${postData.title}</h5>
            <div class="justify-content-between align-items-center">       
              <p class="text-muted" style="text-align:right">${
                postData.date
              }</p>
              <p>By ${postData.author}</p>
              </div>
              <div class="d-flex align-items-center text-muted">       
              <p class="me-3" aria-label="likes count ${
                postData.reactionsCount
              }">🧡 ${postData.reactionsCount}</p>
              <p>Comments: ${postData.commentsCount}</p>
              </div>
              <div id="tag-container" class="text-muted fst-italic"> ${[
                postData.tags,
              ]}</div>
          </div>
        </div>
      </a>
    </div>
  </div>`;
}
