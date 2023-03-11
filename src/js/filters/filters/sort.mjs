export function oldToNew(posts) {
  posts.sort((a, b) => new Date(a.created) - new Date(b.created));
  return posts;
}
export function newToOld(posts) {
  posts.sort((a, b) => new Date(b.created) - new Date(a.created));
  return posts;
}
