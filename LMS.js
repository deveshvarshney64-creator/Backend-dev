function createBook(id, title, author, price) {
    return { id, title, author, price };
}

function createMember(id, name, type) {
    return { id, name, type };
}

function borrowBooks(member, books) {
    return { member, books };
}

function totalValue(books) {
    let sum = 0;
    for (let b of books) sum += b.price;
    return sum;
}

function applyDiscount(fine, type) {
    if (type === "Normal") return fine * 0.95;
    if (type === "Gold") return fine * 0.85;
    return fine;
}
export {
    createBook,
    createMember,
    borrowBooks,
    totalValue,
    applyDiscount
};
