import { load } from "../storage/local.mjs";

/** returns fetch options with body/auth */
export function optionsWithBody(method, body) {
  const token = load("accessToken");
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  console.log(options);
  return options;
}

/** returns fetch options without body/auth */
export function optionsWithoutBody(method = "GET") {
  const token = load("accessToken");

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
}
