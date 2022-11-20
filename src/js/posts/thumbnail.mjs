export default class thumbnail {
  constructor(title, body, media = "", date, id) {
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleString();
    this.id = id;
  }

  get template() {
    return `<div class='col'><div class="card shadow-sm">
<img src="${this.media}"></img>
    <div class="card-body">
      <a class="card-text" href="../post/index.html?id=${this.id}">${this.title}</a>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</a>
        </div>
        <small class="text-muted">${this.date}</small>
      </div>
      </div>
    </div>
    </div>`;
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".col");
    // const viewBtn = element.querySelector('button[data-card="view"]');
    // viewBtn.addEventListener("click", console.log());

    // element.addEventListener("click", console.log());
    parent.append(element);
  }
}
