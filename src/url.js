const url = require("url");

// whatwg방식
const { URL } = url;
const myURL = new URL(
  "https://github.com/hayoung0Lee/NodeJs-textbook?secret=124#anchor"
);

console.log("new URL():", myURL);
console.log("url.format()", url.format(myURL));

const testURL = new URL(
  "https://github.com/hayoung0Lee/NodeJs-textbook?secret=124&category=nodejs&category=javascript#anchor"
);
console.log("new testURL():", testURL);
console.log(testURL.searchParams);
console.log(testURL.searchParams.getAll("category"));
console.log(testURL.searchParams.get("secret"));
console.log(testURL.searchParams.get("category"));
console.log(testURL.searchParams.has("limit"));
console.log("keys", testURL.searchParams.keys());
console.log("values", testURL.searchParams.values());
testURL.searchParams.append("filter", "es3");
testURL.searchParams.append("filter", "es5");
console.log(testURL.searchParams.getAll("filter"));
testURL.searchParams.set("filter", "es6");
console.log(testURL.searchParams.getAll("filter"));
testURL.searchParams.delete("filter");
console.log(testURL.searchParams.getAll("filter"));
console.log(testURL.searchParams.toString());
// url 방식
const parsedUrl = url.parse(
  "https://github.com/hayoung0Lee/NodeJs-textbook?secret=124#anchor"
);
console.log("url.parse()", parsedUrl);
console.log("url.format()", url.format(parsedUrl));
