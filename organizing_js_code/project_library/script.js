let myLibrary = [];
function Book(title, author, pageAmount, read) {
  this.title = title
  this.author = author
  this.pageAmount = pageAmount
  this.read = read
  this.info = function() {
    return this.title + " by " + this.author + ", " + this.pageAmount + " pages, " + this.read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet.");
// console.log(theHobbit);
// console.log(theHobbit.info())

const theRabbit = new Book("The Rabbit", "R.S. Evangelista", 301, "read.");

addBookToLibrary(theHobbit);
addBookToLibrary(theRabbit)

// function that loops through the array and displays each book on the page
function displayLibrary(library) {
  tb = document.getElementById("tb");
  let tr = [];
  library.forEach(book => {
    tr.push('<tr><td>' + book.title + '</td>')
    tr.push('<td>' + book.author + '</td>')
    tr.push('<td>' + book.pageAmount + '</td>')
    tr.push('<td>' + book.read + '</td></tr>')
  })
  tb.innerHTML = tr.join("");
  document.getElementById
}

displayLibrary(myLibrary);