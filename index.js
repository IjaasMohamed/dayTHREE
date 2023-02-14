// const { sum } = require("./helpers");

// const total = sum(25, 486);
// console.log(total);

// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.end("Hello from the server");
//   console.log("New request recieved");
// });

// server.listen(8000),
//   () => {
//     console.log("server has started");
//   };

// const fs = require("fs");

// fs.watch("target.txt", () => console.log("File changed"));
// console.log("Now watching the target.txt for any changes");

// const fs = require("fs");
// const fileName = "target.txt";

// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

// console.log("Now watching the target.txt for any changes");

const fs = require("fs");
const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());

console.log("Now watching the target.txt for any changes");
