const fs = require("fs").promises;
const path = require("path");

console.log("시작");
let filePos = path.join(__dirname, "./readme.txt");

fs.readFile(filePos)
  .then((data) => {
    console.log("1번", data.toString());

    return fs.readFile(filePos);
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile(filePos);
  })
  .then((data) => {
    console.log("3번", data.toString());
    console.log("끝");
  })
  .catch((err) => {
    console.error(err);
  });

console.log("끝");
