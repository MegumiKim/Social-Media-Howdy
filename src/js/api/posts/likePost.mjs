import { renderSinglePost } from "../../renders/index.mjs";
import { load } from "../../storage/local.mjs";
import { getParam } from "../../utils/getParam.mjs";
import { BASE_URL } from "../constants.mjs";

export async function likePost() {
  const id = getParam("id");
  const reactURL = `${BASE_URL}/posts/${id}/react/🧡`;

  const options = makeOptions();
  const response = await fetch(reactURL, options);
  const result = await response.json();

  renderSinglePost();
}

function makeOptions() {
  const token = load("accessToken");
  return {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
}
