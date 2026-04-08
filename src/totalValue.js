import fs from "fs";

function totalValue(books) {
  return books.reduce((sum, book) => sum + book.price, 0);
    fs.writeFileSync("totalValue.json", JSON.stringify({ totalValue: sum }, null, 2));
    return sum;
}

export default totalValue;
