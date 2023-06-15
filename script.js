let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Toggle the read status of a book
Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

// Add a book to the library
function addBookToLibrary(book) {
  return myLibrary.push(book);
}

// Remove a book from the library
const removeBook = (index) => {
  myLibrary.splice(index, 1);
  displayBook();
};

// Display the books in the library
const displayBook = () => {
  // Get bookList from HTML
  const bookList = document.getElementById("bookList");
  // Clear the booklist before rendering
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookList.appendChild(bookCard);

    bookCard.dataset.libraryIndex = index;

    const title = document.createElement("p");
    title.textContent = `"` + book.title + `"`;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages + ` Pages`;
    bookCard.appendChild(pages);

    const readButton = document.createElement("button");
    bookCard.appendChild(readButton);

    // Toggle the class based on the read status
    readButton.classList.toggle("read-button", book.read);
    readButton.classList.toggle("unread-button", !book.read);

    // Set the text content based on the read status
    readButton.textContent = book.read ? "Read" : "Not Read";

    readButton.addEventListener("click", function() {
      book.toggleReadStatus();
      displayBook();
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book";
    bookCard.appendChild(removeButton);
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function() {
      removeBook(index);
    });
  });
};

// Get new book button
const newBookButton = document.getElementById("new-book");
// Get form element
const formElement = document.getElementById("form-box");
// Get container element
const containerElement = document.getElementById("container");

// Add event listener for new book button click
newBookButton.addEventListener("click", function() {
  formElement.classList.replace("off", "on");
  containerElement.classList.replace("focussed", "unfocussed");
});

// Get input elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

// Get submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  formElement.classList.replace("on", "off");
  containerElement.classList.replace("unfocussed", "focussed");

  // Get form input values
  let bookTitle = titleInput.value;
  let bookAuthor = authorInput.value;
  let bookPages = pagesInput.value;
  let bookRead = readInput.checked;

  // Create a new book object
  const book = new Book(bookTitle, bookAuthor, bookPages, bookRead);
  // Add the book to the library
  addBookToLibrary(book);
  // Clear the form input values
  clearForm();
  // Display the updated book list
  displayBook();
  console.log(book);
});

// Clear the form input values
function clearForm() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}
