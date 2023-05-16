const a = 1;
const b = 2;

function c(a, b) {
  if(Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  } else {
    new Error("정수를 내놔")
  }
}

console.log(c("a",b)); // JS는 undefined으로 뜬다.