const fs = require("fs");
const path = require("path");

console.log("시작");
let filePos = path.join(__dirname, "./readme.txt");

fs.readFile(filePos, (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());

  fs.readFile(filePos, (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());

    fs.readFile(filePos, (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
    });
  });
});

console.log("끝");
