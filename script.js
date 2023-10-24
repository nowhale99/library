const myLibrary = [];


function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function renderLibrary(){
    document.getElementById('books').innerHTML = ''
    myLibrary.forEach(book => {
        let bookTitle = document.createElement('div')
        let bookAuthor = document.createElement('div')
        let bookPages = document.createElement('div')
        let bookRead = document.createElement('div')
        let change = document.createElement('button')
        let cls = document.createElement('button')

        bookTitle.classList.add('book-prop')
        bookAuthor.classList.add('book-prop')
        bookPages.classList.add('book-prop')
        bookRead.classList.add('book-prop')
        cls.classList.add('book-prop')
        cls.classList.add('cls-btn', 'book-prop')

        bookTitle.innerText=book.title
        bookAuthor.innerText=book.author
        bookPages.innerText=book.pages
        bookRead.innerText=book.read
        change.innerText = 'Change'
        cls.innerText='X'

        if(bookRead.innerText==='Yes'){
            bookRead.classList.add('read')
        }

        document.getElementById('books').appendChild(bookTitle)
        document.getElementById('books').appendChild(bookAuthor)
        document.getElementById('books').appendChild(bookPages)
        document.getElementById('books').appendChild(bookRead)
        document.getElementById('books').appendChild(change)
        document.getElementById('books').appendChild(cls)

        change.onclick = function(){
            if(bookRead.innerText==='Yes'){
                bookRead.innerText='No'
                bookRead.classList.remove('read')
            } else{
                bookRead.innerText='Yes'
                bookRead.classList.add('read')
            }
        }

        cls.onclick = function(){
            document.getElementById('books').removeChild(bookTitle)
            document.getElementById('books').removeChild(bookAuthor)
            document.getElementById('books').removeChild(bookPages)
            document.getElementById('books').removeChild(bookRead)
            document.getElementById('books').removeChild(cls)
            document.getElementById('books').removeChild(change)
        }
    })
}

function addBook(){
    myLibrary.push(new Book(prompt('Title?'), prompt('Author?'), prompt('Pages?'), prompt('Is read?')))
    renderLibrary()
}


