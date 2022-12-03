import { load } from "../storage/local.mjs";

export function optionsWithBody(method, body, auth = "") {
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

export function options(method, body = "", auth = "", contentType) {
  const headers = makeHeaders(contentType);

  if (body) {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
  } else {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
  }
}

export function makeHeaders(contentType = "application/json") {
  const token = load("accessToken");
  return `headers: {
    "Content-Type": ${contentType},
    authorization: Bearer ${token},
  }`;
}
