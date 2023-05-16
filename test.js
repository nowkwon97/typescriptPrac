"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TS는 기본이 모듈 방식이다. package.json에 따로 선언할 필요가 없다.
var module_file_1 = require("./module-file");
console.log(module_file_1.data);
var a = 1;
var b = 2;
// void = 회피하다 = return이 없다. = 실행함수이다.
// 전통적인 프로그래밍 방식 C++등 을 따왔다.
// 정확히 명시하여 타입 안정성을 보장한다.(type safety)
function moreFunction() {
    console.log("hi");
}
function c(a, b) {
    return a + b;
}
console.log(c(a, b));
