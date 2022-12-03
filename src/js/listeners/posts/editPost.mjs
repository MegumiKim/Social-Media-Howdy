import { fetchData } from "../../api/apiRequests/index.mjs";
import { BASE_URL } from "../../api/constants.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { editPost } from "../../api/apiRequests/index.mjs";
/**
 * Listen to submit event and
 * pass the input value to editPost function
 * and reset the form.
 */
export async function editPostListener() {
  const form = document.querySelector("#editPost");

  if (form) {
    const id = getParam("id");
    const editPostURL = `${BASE_URL}/posts/${id}`;
    const post = await fetchData(editPostURL);

    form.title.value = post.title;
    form.body.value = post.body;
    form.tags.value = post.tags;
    form.media.value = post.media;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      let postData = Object.fromEntries(formData.entries());
      postData.tags = postData.tags.split(",");
      console.log(postData.tags);
      editPost(postData, editPostURL);
      // form.reset();
    });
  }
}
