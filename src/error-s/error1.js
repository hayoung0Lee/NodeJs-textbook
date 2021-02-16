setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장 내주겠다!");
  } catch (err) {
    console.error("err");
  }
}, 1000);
