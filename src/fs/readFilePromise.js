const fs = require("fs").promises;
const path = require("path");

fs.readFile(path.join(__dirname, "./readme.txt"))
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
