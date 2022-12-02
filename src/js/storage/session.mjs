export function save(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function load(key) {
  try {
    return JSON.parse(sessionStorage.getItem(key));
  } catch {
    return undefined;
  }
}

export function remove(key) {
  sessionStorage.removeItem(key);
}

export function clear() {
  sessionStorage.clear();
}
