import fs from "fs";
import os from "os";

// Function to log system information
function logSystemInfo() {
  let info = `CPU: ${os.cpus()[0].model} Memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB Platform: ${os.platform()}`;

  fs.appendFileSync("system_info.txt", info);
  console.log("System information logged");
}

// Log system info every 5 seconds
setInterval(logSystemInfo, 5000);