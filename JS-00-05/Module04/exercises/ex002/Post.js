const Comment = require("./Comment");

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
  }

  addComment(content) {
    const newComment = new Comment(content);
    this.comments.push(newComment);
  }
}

module.exports = Post