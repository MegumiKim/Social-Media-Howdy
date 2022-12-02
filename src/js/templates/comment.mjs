export function comment(postData) {
  const date = new Date(postData.created).toLocaleDateString();
  return `
<div class="card my-3 mx-sm-3 p-3 row comment">
      <div class="card-body p-0">
        <a href="../../profile/index.html" class="card-title">${postData.owner}</a>
        <p class="card-text">${postData.body}</p>
        <p class="card-text">
          <small class="text-muted">${date}</small>
        </p>
      </div>
</div>`;
}
