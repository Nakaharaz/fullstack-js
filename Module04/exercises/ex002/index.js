const Author = require("./Author");

const enzo = new Author('Enzo Nakahara');
enzo.writePost('My new post', 'Lorem ipsum xdxdxdxd');

enzo.posts[0].addComment('Hello, world!');
enzo.posts[0].addComment('Hello, Enzo!');
enzo.posts[0].addComment('Hello, UNIP!');

console.log(enzo.posts[0].comments);