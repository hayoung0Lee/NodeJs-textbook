const fs = require("fs").promises;
const path = require("path");

let where = path.join(__dirname, "./writeme.txt");
fs.writeFile(where, "글이 입력됩니다")
  .then(() => {
    return fs.readFile(where);
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
