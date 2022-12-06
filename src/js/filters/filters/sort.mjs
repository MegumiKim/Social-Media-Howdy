export function oldToNew(posts) {
  posts.sort((a, b) => new Date(a.created > b.created).getTime());
  return posts;
}
export function newToOld(posts) {
  posts.sort((a, b) => new Date(a.created < b.created).getTime());
  return posts;
}
