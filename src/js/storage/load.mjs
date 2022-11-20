export function load(key) {
  try {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  } catch {
    return undefined;
  }
}
