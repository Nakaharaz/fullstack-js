// const book = {
//   title: 'Lord of the rings',
//   pages: 345,
//   published: true,
//   inStock: 30,
//   tags: ['Fantasy', 'Medieval'],
//   author: {
//     name: 'J.R.R. Tolkien'
//   },
//   addOnStock(quantity) {
//     this.inStock += quantity;
//   }
// }

function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = (quantity) => {
    this.inStock += quantity;
  };
  this.save = () => { };
}

const author = 'J.R.R Tolkien';
const tags = ['Fantasy', 'Medieval'];


const lordOfTheRings = new Book('Lord of the rings', 582, tags, author);

console.log(lordOfTheRings);

const harryPotter1 = new Book("Harry Potter and the Philosopher's stone", 194, tags, 'J.K. Rowling')

console.log(harryPotter1);