export function save(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function load(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return undefined;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
