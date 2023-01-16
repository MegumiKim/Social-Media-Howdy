import { optionsWithoutBody } from "./makeOptions.mjs";

/**
 * Generic fetch request.
 * @param {string} url URL for API request
 * @returns Result for request in json format
 */
export async function fetchData(url) {
  const options = optionsWithoutBody();
  const response = await fetch(url, options);
  const result = await response.json();

  return result;
}
