export function save(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function saveToSessionStorage(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}
