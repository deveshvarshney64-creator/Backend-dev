import fs from "fs";

// write file
fs.writeFileSync("data.txt", "Hello World");

// read file
const data = fs.readFileSync("data.txt", "utf8");
console.log(data);

// copy file
fs.copyFileSync("data.txt", "copy.txt");

// delete file
fs.unlinkSync("copy.txt");

// list files
const files = fs.readdirSync(".");
console.log(files);