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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
// console.log(theHobbit);
// console.log(theHobbit.info())

const theRabbit = new Book("The Rabbit", "R.S. Evangelista", 301, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(theRabbit)


// function that loops through the array and displays each book on the page
tb = document.getElementById("tb");
function displayLibrary(library) {
  let tr = [];
  library.forEach(book => {
    tr.push('<tr><td>' + book.title + '</td>')
    tr.push('<td>' + book.author + '</td>')
    tr.push('<td>' + book.pageAmount + '</td>')
    tr.push('<td>' + book.read + '</td>')
    tr.push('<td>' + '</tr>')
  })
  tb.innerHTML = tr.join("");
  // document.getElementById
}

displayLibrary(myLibrary);

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
  addBookToLibrary(newBook);
  displayLibrary(myLibrary);
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