export function errorMessage(container) {
  container.innerHTML = `<div class="col m-auto"><h3>An error occurred. Go back to the previous page</h3>
  <button class='btn btn-secondary' onclick="history.back()">Back</button></div>`;
}
