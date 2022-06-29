//task 1
const http = require("http");
const os = require("os");
const path = require("path");
const personalModule = require("./personalmodule");
let showHour = function () {
  let currentHour = new Date();
  let dayHour = currentHour.getHours();
  return dayHour;
};

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });

    const content = `System intormation:
    Current user name: ${os.userInfo().username};
    OS Type: ${os.type()};
    System work time: ${String(os.uptime())} seconds
    Current working directory:${process.cwd()}
    Server file name: ${path.basename(
      "C:UsersmariaOneDriveDocumentssrcMaria-Bondar-JS-HomeworksHomework11/server.js"
    )};`;
    response.end(content);
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");

//task 2
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(`Date of request: ${showHour()} 
    ${personalModule()}`);
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
