function Book(title, author, pageAmount, read) {
  this.title = title
  this.author = author
  this.pageAmount = pageAmount
  this.read = read
  this.info = function() {
    title + " by " + author + " , " + pageAmount + " " + read;
  }
}