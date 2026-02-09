import fs from "fs";

let data = fs.readFileSync("sample.txt", "utf8");

let temp_string = data.trim();
let words = temp_string.split(/\s+/);

fs.writeFileSync("no_of_words.txt",`No of words in string "${temp_string}" are: ${words.length}`);

console.log("Done");
