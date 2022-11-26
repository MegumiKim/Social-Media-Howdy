import { load } from "../storage/index.mjs";

export function makeOptions(method, body, auth = "") {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: auth,
    },
    body: JSON.stringify(body),
  };

  console.log(options);
  return options;
}

export function authOption(method = "GET") {
  const token = load("accessToken");

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
}
