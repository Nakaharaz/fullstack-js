const Post = require("./Post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  writePost(title, content) {
    let newPost = new Post(title, content, this);
    this.posts.push(newPost);
    console.log(newPost);
  }
}

module.exports = Author;