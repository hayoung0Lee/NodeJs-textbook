const fs = require("fs");
const path = require("path");

console.log("시작");

let filePos = path.join(__dirname, "./readme.txt");

let data = fs.readFileSync(filePos);
console.log("1번", data.toString());

data = fs.readFileSync(filePos);
console.log("2번", data.toString());

data = fs.readFileSync(filePos);
console.log("3번", data.toString());

console.log("끝");
