const path = require("path");

const string = __filename;
console.log(path.extname(string));
console.log(path.dirname(string));
console.log(path.basename(string));
console.log(path.parse(string));
console.log(
  path.format({
    root: "/",
    dir: "/Users/hayoung/Desktop/BaekSoo/Node Basics/NodeJs-textbook/src",
    // base: "path.js",
    // ext: ".js",
    // name: "path",
  })
);

console.log(
  path.normalize(
    "/Users/hayoung/Desktop/BaekSoo///Node Basics/NodeJs-textbook///////src"
  )
);

console.log(
  path.isAbsolute(
    "/Users/hayoung/Desktop/BaekSoo/Node Basics/NodeJs-textbook/src"
  )
);

console.log(path.isAbsolute("../src"));
