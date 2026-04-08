import fs from "fs";

function borrowBooks(member, books) {
    const record = { member, books };
    fs.writeFileSync("borrowRecord.json", JSON.stringify(record, null, 2));
    return record;
}

export default borrowBooks;
