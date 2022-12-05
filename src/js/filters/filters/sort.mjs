export function oldToNew(posts) {
  // posts.sort((a, b) => a.created - b.created);
  posts.sort((a, b) => (a.created > b.created ? 1 : -1));
  return posts;
}
export function newToOld(posts) {
  posts.sort(
    (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
  );
  // posts.sort((a, b) => (a.created < b.created ? 1 : -1));
  return posts;
}
