import { postThumbnail } from "../templates/index.mjs";

/**Class representing a post thumbnail (card) */
export class Thumbnail {
  /**
   * Create a post thumbnail.
   * Date will be formatted without time.
   */
  constructor(post) {
    this.media = post.media;
    this.title = post.title;
    this.tags = post.tags;
    this.date = new Date(post.created).toLocaleDateString("en-GB");
    this.id = post.id;
    this.author = post.author.name;
    this.reactionsCount = post._count.reactions;
    this.commentsCount = post._count.comments;
  }

  /** Get HTML template for a post thumbnail*/
  get template() {
    return postThumbnail(this);
  }

  /**render the thumbnail template in container */
  render(parent = document.body) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.template, "text/html");
    const element = doc.querySelector(".thumbnail");

    parent.append(element);
  }
}
