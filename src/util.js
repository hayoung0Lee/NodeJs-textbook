const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "deprecated dontUseMe");

// dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
// console.log(randomBytesPromise instanceof Promise);

randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
