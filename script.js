const myLibrary = [];

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

// manually created books
addBookToLibrary('Name of The Wind', 'Patrick Rothfuss', 394, true);
addBookToLibrary('Mistborn', 'Brandon Sanderson', 525, false);
addBookToLibrary('Harry potter', 'J. K. Rowling', 292, false);

// Displays books on the screen
function bookshelf(array) {
  array.forEach(function (element) {
    const div = document.createElement('div');
    const book = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    book.textContent = `Book: ${element.name}`;
    author.textContent = `By the author: ${element.author}`;
    pages.textContent = `With ${element.lenght} pages`;
    if (element.read == true) {
      read.textContent = 'And i have read it!';
    } else {
      read.textContent = 'And i have not read it!';
    }
    document.body.appendChild(div);
    div.appendChild(book);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
  });
}

bookshelf(myLibrary);
