import { optionsWithoutBody } from "../makeOptions.mjs";

export async function fetchData(url) {
  try {
    const options = optionsWithoutBody();
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
