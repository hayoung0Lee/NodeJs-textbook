import { odd, even } from "./var.mjs";
import checkNumber from "./func.mjs";

// const { odd, even } = require("./var.mjs");
// const checkNumber = require("./func.mjs");

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
