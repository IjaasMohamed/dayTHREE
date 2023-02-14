const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Hello from the server");
  console.log("New request recieved");
});

server.listen(8000, "127.0.0.1"),
  () => {
    console.log("server has started");
  };
