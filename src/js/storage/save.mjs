export function save(key, item) {
  const storedItem = JSON.stringify(item);
  localStorage.setItem(key, storedItem);
}
