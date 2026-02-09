import fs from "fs";

if (!fs.existsSync("source") || !fs.existsSync("destination")) {
  console.log("Please create 'source' and 'destination' folders first.");
  process.exit();
}

const files = fs.readdirSync("source");

files.forEach(file => {
  fs.copyFileSync(`source/${file}`, `destination/${file}`);
});

console.log("Files copied successfully.");