export function postsFilter(post, searchValue) {
  if (post.body) {
    if (
      post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchValue.toLowerCase())
    )
      return post;
  } else {
    if (
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchValue.toLowerCase())
    )
      return post;
  }
}

// Trying to refactor...
// export function filterPost(post, searchValue) {
//   if (post.body) {
//     const checkItems = [post.title, post.author.name, post.body];

//     let matches = checkItems.some((item) =>
//       item.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     return matches ? post : false;
//   } else {
//     const checkItems = [post.title, post.author.name];

//     let matches = checkItems.some((item) =>
//       item.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     return matches ? post : false;
//   }
// }
