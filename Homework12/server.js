//task 1, 2
const http = require("http");
http
  .createServer(function (request, response) {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, GET",
      "Access-Control-Max-Age": 2592000,
    };

    switch (request.url) {
      case "/vote":
        headers["Content-Type"] = "text/plain";
        response.writeHead(200, headers);

        const content = `You vote is accepted: ${new Date().toISOString()}`;
        response.end(content);
        break;
      case "/authors":
        headers["Content-Type"] = "application/json";
        response.writeHead(200, headers);
        const fs = require("fs");
        let book = fs.readFileSync("book.json");
        let authors = JSON.parse(book);
        console.log(authors);
        response.end(JSON.stringify(authors));
        break;
      default:
        response.writeHead(404);
        response.end("404 Not Found");
        break;
    }
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");
