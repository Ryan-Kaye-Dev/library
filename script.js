let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      `${title}` +
      ` by ` +
      `${author}` +
      `, ` +
      `${pages}` +
      ` pages,` +
      `${read}` +
      `.`
    );
  };
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
}

const displayBook = () => {
  // get bookList from HTML
  const bookList = document.getElementById("bookList");
  // clear the booklist before rendering
  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookList.appendChild(bookCard);

    const title = document.createElement("p");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages + ` Pages`;
    bookCard.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = book.read;
    bookCard.appendChild(read);
  });
};
displayBook();

// get new book button
const newBookButton = document.getElementById("new-book");
// get form element
const formElement = document.getElementById("form-box");
// get container element
const containerElement = document.getElementById("container")

// add event listener for button click
newBookButton.addEventListener("click", function () {
  formElement.classList.replace("off", "on");
  containerElement.classList.replace("focussed", "unfocussed");
});

//get input elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

// get submit button
const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  formElement.classList.replace("on", "off");
  containerElement.classList.replace("unfocussed", "focussed")

  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.value;

  const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  addBookToLibrary(book);
  clearForm();
  displayBook(book);
});
