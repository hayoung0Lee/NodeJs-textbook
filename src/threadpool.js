const crypto = require("crypto");

const pass = "pass";
const salt = "salt";
const start = Date.now();

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("1", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("2", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("3", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("4", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("5", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("6", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("7", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 100000, 128, "sha512", (err, key) => {
  console.log("8", Date.now() - start);
});

// UV_THREADPOOL_SIZE=1 && node src/threadpool.js
