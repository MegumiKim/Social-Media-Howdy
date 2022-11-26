import { commentsTemplate } from "../../templates/commentTemplate.mjs";
import { mySinglePostTemplate } from "../../templates/index.mjs";
import { deletePostListener } from "../listeners/deletePost.mjs";
import { editPostListener } from "../listeners/editPost.mjs";
import { postCommentListener } from "../listeners/postComment.mjs";

// const container = document.querySelector("#post-container");

export class SinglePostClass {
  constructor(title, body, media = "", date, id, author, comments, itsMe) {
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleDateString();
    this.id = id;
    this.author = author;
    this.comments = comments;
    this.itsMe = itsMe;
  }

  get template() {
    return mySinglePostTemplate(this);
  }

  get comment() {
    return this.comments.map((comment) => commentsTemplate(comment));
  }

  postComment() {
    postCommentListener();
  }

  edit() {
    editPostListener();
  }

  delete() {
    deletePostListener();
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector("#singlePost");
    const editBtn = doc.querySelector("#editBtn");
    const deleteBtn = doc.querySelector("#deleteBtn");
    parent.append(element);

    if (this.comments.length > 0) {
      const commentDoc = parser.parseFromString(this.comment, "text/html");

      this.comment.forEach((comment) => {
        element.append(commentDoc.querySelector(".comment"));
      });
    }

    console.log(doc);

    if (this.itsMe) {
      editBtn.style.display = "block";
      deleteBtn.style.display = "block";
    }
  }
}
