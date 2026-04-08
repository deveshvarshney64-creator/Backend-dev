import fs from "fs";

function applyDiscount(fine, type) {
    let final = fine;
    if (type === "Normal") final = fine * 0.95;
    if (type === "Gold") final = fine * 0.85;
    fs.writeFileSync("finalFine.json", JSON.stringify({ finalFine: final }, null, 2));
    return final;
}

export default applyDiscount;
