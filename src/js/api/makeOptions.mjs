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
  return options;
}

export function authOption() {
  const token = load("accessToken");

  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
}
