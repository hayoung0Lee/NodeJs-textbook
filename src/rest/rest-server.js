const http = require("http");
const fs = require("fs").promises;

const base = "./dist";

const users = {};
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        const data = await fs.readFile(`${base}/index.html`);
        res.writeHead(200, {
          "Content-Type": `text/html; charset=utf-8`,
        });
        return res.end(data);
      } else if (req.url === "/about") {
        // about으로 바꿔야함
        const data = await fs.readFile("./about.html");
        res.writeHead(200, {
          "Content-Type": `text/html; charset=utf-8`,
        });
        return res.end(data);
      } else if (req.url === "/users") {
        res.writeHead(200, {
          "Content-Type": `text/plain; charset=utf-8`,
        });
        return res.end(JSON.stringify(users));
      }

      try {
        console.log("other stuff", req.url);
        const data = await fs.readFile(`${base}/${req.url}`);
        return res.end(data);
      } catch (err) {
        console.error("err", err);
      }
      res.writeHead(404);
      return res.end("NOT FOUND");
    } else if (req.method === "POST") {
      if (req.url === "/user") {
        let body = "";
        req.on("data", (data) => {
          body += data;
        });

        return req.on("end", () => {
          console.log("POST 본문(Body)", body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201);
          return res.end("등록 성공");
        });
      }
    } else if (req.method === "PUT") {
      if (req.url.startsWith("/user/")) {
        const key = req.url.split("/")[2];
        let body = "";
        req.on("data", (data) => {
          body += data;
        });

        return req.on("end", () => {
          console.log("PUT 본문(Body)", body);
          users[key] = JSON.parse(body).name;
          return res.end(JSON.stringify(users));
        });
      }
    } else if (req.method === "DELETE") {
      if (req.url.startsWith("/user/")) {
        const key = req.url.split("/")[2];
        delete users[key];
        return res.end(JSON.stringify(users));
      }
    }

    console.log("reach here?");

    res.writeHead(404);
    return res.end("NOT FOUND");
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": `text/html; charset=utf-8` });
    res.end(err.message);
  }
});

server.listen(8080);

server.on("listening", () => {
  console.log("8080포트에서 rest-server가 기다리고 있습니다");
});

server.on("error", (error) => {
  console.error(error);
});
