export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return undefined;
  }
}

export function loadFromSessionStorage(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return undefined;
  }
}
