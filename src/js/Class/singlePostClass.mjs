import { commentsTemplate } from "../../templates/commentTemplate.mjs";
import { singlePostTemplate } from "../../templates/singlePostTemplate.mjs";
import { postCommentListener } from "../listeners/postComment.mjs";

export class SinglePostClass {
  constructor(title, body, media = "", date, id, author, comments) {
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleDateString();
    this.id = id;
    this.author = author;
    this.comments = comments;
  }

  get template() {
    return singlePostTemplate(this);
  }

  get comment() {
    return this.comments.map((comment) => commentsTemplate(comment));
  }

  postComment() {
    postCommentListener();
  }

  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector("#singlePost");
    parent.append(element);

    if (this.comments.length > 0) {
      const commentDoc = parser.parseFromString(this.comment, "text/html");

      this.comment.forEach((comment) => {
        element.append(commentDoc.querySelector(".comment"));
      });
    }
  }
}
