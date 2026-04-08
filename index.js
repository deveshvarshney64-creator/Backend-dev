import createBook from "./src/createBook.js";
import createMember from "./src/createMember.js";
import borrowBooks from "./src/borrowBooks.js";
import totalValue from "./src/totalValue.js";
import applyDiscount from "./src/applyDiscount.js";


const book1 = createBook(1, "JavaScript", "John", 500);
const book2 = createBook(2, "Node.js", "Smith", 700);
const member = createMember(1, "Devesh", "Gold");


const record = borrowBooks(member, [book1, book2]);


const total = totalValue(record.books);


const fine = 100;
const finalFine = applyDiscount(fine, member.membershipType);


console.log("\n===== Borrow Summary =====");
console.log("Member:", member.name);
console.log("Membership:", member.membershipType);
console.log("Books Borrowed:", record.books.map(b => b.title));
console.log("Total Value:", total);
console.log("Final Fine after Discount:", finalFine);