const fs = require("fs");
const path = require("path");

let filePos = path.join(__dirname, "./readme.txt");

const readStream = fs.createReadStream(filePos, { highWaterMark: 16 });
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log(chunk, chunk.length, chunk.toString());
});

readStream.on("end", (chunk) => {
  console.log(Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.error(err);
});
