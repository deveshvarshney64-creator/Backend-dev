import fs from "fs";

function createBook(id, title, author, price) {
    const book = { id, title, author, price };
    fs.writeFileSync("book.json", JSON.stringify(book, null, 2));
    return book;
}

export default createBook;
