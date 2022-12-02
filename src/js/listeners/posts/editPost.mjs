import * as requests from "../../api/apiRequests/index.mjs";
import { fetchData } from "../../api/apiRequests/index.mjs";
import { BASE_URL } from "../../api/constants.mjs";
/**
 * Listen to submit event and
 * pass the input value to editPost function
 * and reset the form.
 */
export async function editPostListener() {
  const form = document.querySelector("#editPost");
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const editPostURL = `${BASE_URL}/posts/${id}`;
    const post = await fetchData(editPostURL);

    form.title.value = post.title;
    form.body.value = post.body;
    form.media.value = post.media;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const postData = Object.fromEntries(formData.entries());

      requests.edit(postData, editPostURL);
      form.reset();
    });
  }
}
