import fs from "fs";

if (!fs.existsSync("log.txt")) {
  console.log("log.txt file not found");
  process.exit();
}

const data = fs.createReadStream("log.txt");
let errors = 0;

data.on("data", chunk => {
  const lines = chunk.toString().split("\n");
  lines.forEach(line => {
    if (line.includes("ERROR")) {
      errors++;
    }
  });
});

data.on("end", () => {
  console.log("Total errors:", errors);
});