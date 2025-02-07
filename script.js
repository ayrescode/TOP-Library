const myLibrary = [];
const library = document.querySelector('.library');
const send = document.querySelector('.btn');

// the constructor...
function book(name, author, lenght, read) {
  this.name = name;
  this.author = author;
  this.lenght = lenght;
  this.read = read;
}

// take params, create a book then store it in the array
function addBookToLibrary(name, author, lenght, read) {
  let newBook = new book(name, author, lenght, read);
  return myLibrary.push(newBook);
}

function displayBooks() {
  library.innerHTML = '';
  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.setAttribute('data-index', myLibrary.indexOf(book));
    card.innerHTML = `
          <h1>${book.name}</h1>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <button class="${book.read}">  ${
      book.read == 'true' ? 'Read' : 'Not Read'
    }     </button>
          <button class="delete">Delete</button>
      `;
    library.appendChild(card);
  }
}

// button selector and event listener
send.addEventListener('click', handleClick);
// function to create and display new book.
function handleClick() {
  const name = document.querySelector('#bookName');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const select = document.querySelector('select');
  addBookToLibrary(
    `${name.value}`,
    `${author.value}`,
    `${pages.value}`,
    `${select.value}`
  );
  displayBooks();
  name.value = '';
  author.value = '';
  pages.value = '';
  select.value = 'true';
}

// delete button event
library.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const index = event.target.parentElement.getAttribute('data-index');
    deleteBook(index);
  }
});
// function delete
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
// manual books created
const book1 = new book('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);
const book2 = new book('To Kill a Mockingbird', 'Harper Lee', 281, false);
const book3 = new book('No Longer Human', 'Osamu Dazai', 304, true);
const book4 = new book('Flowers for Algernon', 'Daniel Keyes', 272, true);
const book5 = new book('The Shining', 'Stephen King', 447, false);
myLibrary.push(book1, book2, book3, book4, book5);
displayBooks();
