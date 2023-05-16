// TS는 기본이 모듈 방식이다. package.json에 따로 선언할 필요가 없다.
import {data} from './module-file';

console.log(data);

const a = 1;
const b = 2;

// void = 회피하다 = return이 없다. = 실행함수이다.
// 전통적인 프로그래밍 방식 C++등 을 따왔다.
// 정확히 명시하여 타입 안정성을 보장한다.(type safety)
function moreFunction() : void {
  console.log("hi");
}

function c(a : number, b : number) : number {
  return a + b;
}

console.log(c(a,b));