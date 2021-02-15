const crypto = require("crypto");

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  //   const salt =
  //     "CAAe66HIwiUOtoaV6lOsxF1rLeDk2lpH2Y6glv/1lkGmiF1N84nCal2gtNvlY95c8yV+KZbHl1T3xc2R8rY0zQ==";
  console.log("salt:", salt);
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password", key.toString("base64"));
  });
});
