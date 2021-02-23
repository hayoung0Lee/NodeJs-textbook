const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const server = http.createServer(async (req, res) => {
  //   res.writeHead(200, { "Content-Type": `text/html; charset=itf-8` });
  //   res.write("<h1>Hello Node!</h1>");
  //   res.end("<h1>Hello Server!</h1>");
  try {
    console.log("Responsse");
    const data = await fs.readFile(path.join(__dirname, "./index.html"));
    res.writeHead(200, { "Content-Type": `text/html; charset=itf-8` });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": `text/html; charset=itf-8` });
    res.end(err.message);
  }
});

server.listen(8080);

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다");
});

server.on("error", (error) => {
  console.error(error);
});

// const server2 = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": `text/html; charset=itf-8` });
//   res.write("<h1>Hello Node! It is from the second server</h1>");
//   res.end("<h1>Hello Server!</h1>");
// });
// //   .listen(8080, () => {
// //     console.log(`8080번 포트에서 서버 대기중입니다`);
// //   });

// server2.listen(8081);

// server2.on("listening", () => {
//   console.log("8081번 포트에서 서버 대기 중입니다");
// });

// server2.on("error", (error) => {
//   console.error(error);
// });
