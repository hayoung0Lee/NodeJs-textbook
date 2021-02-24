const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

// 로그 기록
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("모든 요청에 다 실행됩니다");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(Req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
});

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});
// app.use("/", express.static(path.join(__dirname, "public")));
// app.get(
//   "/",
//   (req, res, next) => {
//     // res.send("Hello, Express");
//     // throw new Error("에러는 에러 처리 미들웨어로 갑니다");
//     res.sendFile(path.join(__dirname, "/index.html"));
//     // next();
//   }
//   //   (req, res, next) => {
//   //     console.log("response");
//   //     try {
//   //       throw new Error("에러는 에러 처리 미들웨어로 갑니다");
//   //     } catch (err) {
//   //       next("완전 망했습니다");
//   //     }
//   //   }
//   //   (req, res) => {
//   //     console.log("next");
//   //   }
// );

// app.post("/upload", upload.single("file"), (req, res) => {
//   console.log(req.file, req.body);
//   res.send("OK");
// });
app.use((err, req, res, next) => {
  if (err) {
    console.error("에러처리 중입니다", err);
    //   res.status(500).send(err.message);
    res.status(500).send("망했습니다");
  }
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
