export function oldToNew(posts) {
  posts.sort((a, b) => (a.created - b.created));
  console.log(posts);
  return posts;
}
export function newToOld(posts) {
  posts.sort((a, b) => (a.created < b.created ? 1 : -1));
  return posts;
}
