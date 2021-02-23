const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

const parseCookies = (cookie = "") => {
  return cookie
    .split(";")
    .map((v) => {
      return v.split("=");
    })
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

const session = {};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log("here", req.headers.cookie, cookies);
    try {
      if (req.url.startsWith("/login")) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);

        if (!name) {
          throw Error("Give me Login ID");
        }
        const expires = new Date();

        expires.setMinutes(expires.getMinutes() + 5);

        const uniqueInt = Date.now();

        session[uniqueInt] = { name, expires };
        res.writeHead(302, {
          Location: "/",
          "Set-Cookie": `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });

        res.end();
      } else if (
        cookies?.session &&
        cookies.session &&
        session[cookies.session].expires > new Date()
      ) {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(`${session[cookies.session].name}님 안녕하세요`);
      } else {
        try {
          const data = await fs.readFile("./cookie2.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(data);
        } catch (err) {
          console.log(err);
          res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
          res.end(error.message);
        }
      }
    } catch (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080, () => {
    console.log("8080포트에서 대기중");
  });
