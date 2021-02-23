const http = require("http");
// import http from 'http';

const server = http.createServer((req, res) => {
  res.end("Hello everyone!!!");
});

server.listen(3000, () => {
  console.log("Running server on port 3000");
});
