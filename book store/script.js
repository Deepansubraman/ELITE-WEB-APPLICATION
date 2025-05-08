
function showForm() {
    document.getElementById("bookFormModal").style.display = "flex";
}
function closeForm() {
    document.getElementById("bookFormModal").style.display = "none";
}

function addBook() {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const aboutBook = document.getElementById("aboutBook").value;

    if (bookName && authorName && aboutBook) {
        const bookList = document.getElementById("bookList");

        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `
            <h3>${bookName}</h3>
            <p><strong>Author:</strong> ${authorName}</p>
            <p>${aboutBook}</p>
            <button class="delete-btn" onclick="deleteBook(this)">Delete</button>
        `;

        bookList.appendChild(bookItem);

        document.getElementById("bookForm").reset();
        closeForm();
    } else {
        alert("Please fill out all fields.");
    }
}

function deleteBook(button) {
    const bookItem = button.parentElement;
    bookItem.remove();
}