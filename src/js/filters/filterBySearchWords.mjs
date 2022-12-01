export function filterBySearchWords(post, searchValue) {
  if (post.body) {
    if (
      post.body.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
      return post;
  } else {
    if (post.title.toLowerCase().includes(searchValue.toLowerCase()))
      return post;
  }
}

// posts = posts.filter(
//   ({ title, body }) =>
//     (title.toLowerCase().includes(searchValue.toLowerCase()))
//   ||
//   body.toLowerCase().includes(searchValue.toLowerCase())
// );
