const myLibrary = [];
const library = document.querySelector('.library');
const send = document.querySelector('.btn');
const input = document.querySelector('input');

// the constructor...
function Book(name, author, lenght, read) {
  this.name = name;
  this.author = author;
  this.lenght = lenght;
  this.read = read;
}

// take params, create a book then store it in the array
function addBookToLibrary(name, author, lenght, read) {
  let newBook = new Book(name, author, lenght, read);
  return myLibrary.push(newBook);
}

// Displays books on the screen
function bookshelf(array) {
  const div = document.createElement('div');
  const book = document.createElement('h1');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  book.textContent = `Book: ${array.name}`;
  author.textContent = `By the author: ${array.author}`;
  pages.textContent = `With ${array.lenght} pages`;
  if (array.read == true) {
    read.textContent = 'And i have read it!';
  } else {
    read.textContent = 'And i have not read it!';
  }
  library.appendChild(div);
  div.appendChild(book);
  div.appendChild(author);
  div.appendChild(pages);
  div.appendChild(read);
}

// button selector
send.addEventListener('click', handleClick);
// function to create and display new book.
function handleClick() {
  addBookToLibrary('Name of The Wind', 'Patrick Rothfuss', 394, true);
  let lastBook = myLibrary[myLibrary.length - 1];
  bookshelf(lastBook);
}
