export function getParam(param) {
  const url = new URL(location.href);
  return url.searchParams.get(param);
}
