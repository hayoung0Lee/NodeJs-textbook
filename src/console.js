const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outdie: {
    inside: {
      key: "value",
      key2: {
        check: "check",
      },
    },
  },
};

console.time("전체시간");

console.log("평범한 로그입니다. 쉼표로 구분해여러값을 찍을 수 있습니다");
console.log(`${string} ${number} ${boolean}`);

console.error(`에러 메시지는 console.error에 담아주세요`);

console.table([
  { name: "하영", birth: 1995 },
  { name: "이하영", birth: 1995 },
]);

console.dir(obj);
console.dir(obj, { colors: false, depth: 3 });
console.dir(obj, { colors: true, depth: 2 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적"); // 에러 뿐만 아니라 얘를 이용하면 함수가 어디서부터 호출되는지 확인이 가능하다
}

function a() {
  b();
}

a();

console.timeEnd("전체시간");
