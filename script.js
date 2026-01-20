
function load() {
    renderBooks()
}

function renderBooks() {
    let contentRef = document.getElementById("books");
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        contentRef.innerHTML += bookTemplate(i);
    }
}




function likeBook() {

}

function sendComment() {

}