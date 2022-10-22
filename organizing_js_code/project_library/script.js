class Book {
  constructor(title, author, pageAmount, read) {
    this.title = title;
    this.author = author;
    this.pageAmount = pageAmount;
    this.read = read;
  }

  info = () => {
    this.title + " by " + this.author + ", " + this.pageAmount + " pages, " + this.read;
  }
}

class Library {

  constructor() {
    this.myLibrary = [];
  }

  addBookToLibrary(book) {
    this.myLibrary.push(book);
    console.log(`${book.title} added to library`)
  }

  displayLibrary = () => {
    let tb = document.getElementById("tb");
    let tr = [];
    this.myLibrary.forEach(book => {
      tr.push('<tr><td>' + book.title + '</td>')
      tr.push('<td>' + book.author + '</td>')
      tr.push('<td>' + book.pageAmount + '</td>')
      tr.push('<td>' + book.read + '<input type="button" value="change status" onclick="changeStatus(this)"/>' + '</td>')
      tr.push('<td>' + '<input type="button" value="Delete" onclick="deleteRow(this)"/>'+ '</tr>')
    })
    tb.innerHTML = tr.join("");
  }

  changeStatus(row) {
    var index = row.parentNode.parentNode.rowIndex;
    let readStatus = this.myLibrary[index-1].read
    if (readStatus === 'not read yet') {
      this.myLibrary[index-1].read = 'read';
    } else {
      this.myLibrary[index-1].read = 'not read yet';
    }
  }

  deleteBook(row) {
    var index = row.parentNode.parentNode.rowIndex;
    this.myLibrary.splice(index-1,1);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const theRabbit = new Book("The Rabbit", "R.S. Evangelista", 301, "read");

const onlineCatalog = new Library();

onlineCatalog.addBookToLibrary(theHobbit);
onlineCatalog.addBookToLibrary(theRabbit);

onlineCatalog.displayLibrary();

function changeStatus(row) {
  onlineCatalog.changeStatus(row);
  onlineCatalog.displayLibrary();
}

function deleteRow(row) {
  onlineCatalog.deleteBook(row);
  onlineCatalog.displayLibrary();
}

// function that loops through the array and displays each book on the page
// tb = document.getElementById("tb");
// function displayLibrary(library) {
//   let tr = [];
//   library.forEach(book => {
//     tr.push('<tr><td>' + book.title + '</td>')
//     tr.push('<td>' + book.author + '</td>')
//     tr.push('<td>' + book.pageAmount + '</td>')
//     tr.push('<td>' + book.read + '<input type="button" value="change status" onclick="changeStatus(this)"/>' + '</td>')
//     tr.push('<td>' + '<input type="button" value="Delete" onclick="deleteRow(this)"/>'+ '</tr>')
//   })
//   tb.innerHTML = tr.join("");
// }

// displayLibrary(myLibrary);

const newBookBtn = document.getElementById('newBookBtn');
const submitBtn = document.getElementById('submitBtn');

newBookBtn.addEventListener('click', () => {
  const newBookForm = document.getElementById('newBookForm');
  if (newBookForm.style.display === 'none') {
    newBookForm.style.display = 'block';
    submitBtn.style.display = 'block';
    newBookBtn.style.display = 'none';
    
  } else {
    newBookForm.style.display = 'none';
  }
})


submitBtn.addEventListener('click', () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pageAmt = document.getElementById('pageAmt');
  const readStatus = document.getElementById('read-status');
  // console.log(readStatus)

  const newBook = new Book(title.value, author.value, pageAmt.value, readStatus.value);
  onlineCatalog.addBookToLibrary(newBook);
  onlineCatalog.displayLibrary();
  // addBookToLibrary(newBook);
  // displayLibrary(myLibrary);
  hideForm()
  function resetValues() {
    this.title.value = ''
    this.author.value = ''
    this.pageAmt.value = ''
    document.getElementById("read-status").selectedIndex = 0;

  }
  resetValues()
})

function hideForm() {
  submitBtn.style.display = 'none';
  newBookForm.style.display = 'none';
  newBookBtn.style.display = 'block';

}

// function deleteRow(row) {
//   var index = row.parentNode.parentNode.rowIndex;
//   myLibrary.splice(index-1,1);
//   displayLibrary(myLibrary)
// }

// function changeStatus(row) {
//   var index = row.parentNode.parentNode.rowIndex;
//   readStatus = myLibrary[index-1].read
//   console.log(readStatus);
//   if (readStatus === 'not read yet') {
//     myLibrary[index-1].read = 'read';
//   } else {
//     myLibrary[index-1].read = 'not read yet';
//   }
//   displayLibrary(myLibrary)
// }