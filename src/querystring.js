const url = require("url");
const querystring = require("querystring");

// 노드의 url을 사용할때는 query 부분을 querystring이라는 모듈로 처리한다
const myURL = url.parse(
  "https://github.com/hayoung0Lee/NodeJs-textbook?secret=124&category=nodejs&category=javascript#anchor"
);
console.log(myURL);
console.log(myURL.query);
const query = querystring.parse(myURL.query);
console.log(query);
console.log(querystring.stringify(query));
