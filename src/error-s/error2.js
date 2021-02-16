// const fs = require("fs");

// // 내장 모듈의 에러는 프로세스를 멈추지 않는다
// setInterval(() => {
//   fs.unlink("./abcd.js", (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
// }, 1000);

const fs = require("fs").promises;

// 내장 모듈의 에러는 프로세스를 멈추지 않는다
setInterval(() => {
  fs.unlink("./abcd.js").catch((err) => console.error(err));
}, 1000);
