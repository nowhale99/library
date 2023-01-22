let myLibrary = []

function Book(title, author, pages, read, bookId) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.bookId = bookId
}

function showBooks() {
    
    myLibrary.forEach(book => {
       const newBook =  document.createElement('div')
       newBook.style = 'height: 500px; width: 300px; border: 1px solid gray; border-radius: 20px; display: flex; flex-direction: column; justify-content: space-around; align-items: center'
       document.querySelector('.library').appendChild(newBook)

       const title = document.createElement('div')
       title.innerText = `Title: ${book.title}`
       newBook.appendChild(title)

       const author = document.createElement('div')
       author.innerText = `Author: ${book.author}`
       newBook.appendChild(author)

       const pages = document.createElement('div')
       pages.innerText = `Pages: ${book.pages}`
       newBook.appendChild(pages)

       const read = document.createElement('div')
       read.innerText = `Is read: ${book.read}`
       newBook.appendChild(read)

       const bookId = document.createElement('div')
       bookId.innerText = book.bookId

       const delBtn = document.createElement('button')
       delBtn.classList.add('delBtn')
       delBtn.innerText = 'X'
       delBtn.addEventListener('click', ()=>{
        myLibrary=myLibrary.filter(book=>book.bookId!=bookId.innerText)
        newBook.remove()
    })
       newBook.appendChild(delBtn)

       const changeBtn = document.createElement('button')
       changeBtn.classList.add('changeBtn')
       changeBtn.innerText='Read it!'
       changeBtn.addEventListener('click', ()=>{
        book.read='YESSSSS'
        read.innerText = `Is read: ${book.read}`
       })
       newBook.appendChild(changeBtn)
    })
}
let Ids = 0
function addBook() {
    const title = prompt('title?')
    const author = prompt('author?')
    const pages = prompt('pages?')
    const read = prompt('already read thuis?')
    const bookId = Ids
    Ids+=1

    const newBook = new Book(title, author, pages, read, bookId)
    myLibrary.push(newBook)
    document.querySelector('.library').innerHTML = ''
    showBooks()
}

document.querySelector('.addBookBtn').addEventListener('click', ()=>addBook())

