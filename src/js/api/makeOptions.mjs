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
