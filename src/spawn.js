const spawn = require("child_process").spawn;

const process = spawn("python", ["src/test.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error("here?", data.toString());
});
