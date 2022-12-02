import { postThumbnail } from "../templates/index.mjs";

/**Class representing a post thumbnail (card) */
export class Thumbnail {
  /**
   * Create a post thumbnail.
   * Date will be formatted without time.
   */
  constructor(title, body, media, date, id, author, count) {
    const DateFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    this.title = title;
    this.body = body;
    this.media = media;
    this.date = new Date(date).toLocaleDateString("en-GB", DateFormatOptions);
    this.id = id;
    this.author = author;
    this.reactionsCount = count.reactions;
    this.commentsCount = count.comments;
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
