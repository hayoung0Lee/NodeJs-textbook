process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버를 뽀개자");
}, 3000);

setInterval(() => {
  console.log("실행되고있다~");
}, 2000);
