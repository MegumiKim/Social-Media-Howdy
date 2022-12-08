import * as templates from "../templates/index.mjs";
import * as listeners from "../listeners/index.mjs";
// const container = document.querySelector("#post-container");

/** Class representing a single post item */
export class SinglePost {
  /**
   * Create a post.
   * @param {boolean} myPost This indicates the post in question is whether posted by the user or not by boolean expression.
   */
  constructor(post, myPost) {
    this.title = post.title;
    this.body = post.body;
    this.media = post.media;
    this.tags = post.tags;
    this.date = new Date(post.created).toLocaleDateString();
    this.id = post.id;
    this.author = post.author.name;
    this.comments = post.comments;
    this.reactionsCount = post._count.reactions;
    this.commentsCount = post._count.comments;
    this.myPost = myPost;
  }

  /** Get HTML template for a single post*/
  get template() {
    return templates.singlePost(this);
  }

  /** Get HTML template for comments */
  get comment() {
    return this.comments.map((comment) => templates.comment(comment));
  }

  /** listen to form submission event (post comment)*/
  postComment() {
    listeners.postCommentListener();
  }

  /** listen to form submission event (edit post)*/
  edit() {
    listeners.editPostListener();
  }

  /** listen to form submission event (delete)*/
  delete() {
    listeners.deletePostListener();
  }

  likePost() {
    listeners.likePostListener();
  }
  // reload() {
  //   container.innerHTML = "";
  // }

  /** render the post in container.
   * If there are any comment on the post, render each comment.
   * If the post is made by the user,
   * display "edit button" and "delete button" which are otherwise hidden.
   */
  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector("#singlePost");
    const editBtn = doc.querySelector("#editBtn");
    const deleteBtn = doc.querySelector("#deleteBtn");
    // const likeBtn = doc.querySelector("#likeBtn");

    parent.append(element);

    if (this.comments.length > 0) {
      const commentDoc = parser.parseFromString(this.comment, "text/html");

      this.comment.forEach((comment) => {
        element.append(commentDoc.querySelector(".comment"));
      });
    }

    if (this.myPost) {
      editBtn.style.display = "block";
      deleteBtn.style.display = "block";
    }
  }
}
