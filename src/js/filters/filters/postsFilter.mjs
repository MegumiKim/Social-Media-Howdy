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
