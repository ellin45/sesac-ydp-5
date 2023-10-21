"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//선택적 매개변수(?.)는 맨 뒤에 있어야함(어디에 선택적 매개변수를 할당했는지 헷갈리기 때문)
function print(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
print(2, 4, 6); // 2,4,6
print(2, 4); // 2,4,undefined
//매개변수에 기본값 할당 가능
function print2(a, b, c) {
    if (c === void 0) { c = 100; }
    console.log('print2() 출력 결과');
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(2, 4, 6); //2,4,6
print2(2, 4); //2,4,100
// 매개변수 없는 함수
function sayHello() {
    console.log('Hello~');
}
sayHello();
function sayHello2() {
    return 'Hello~~';
}
console.log(sayHello2);
function concatString(x, y) {
    return x + y;
}
console.log(concatString('안녕', '하세유'));
function circleArea(r) {
    return r * r * Math.PI;
}
console.log(circleArea(5));
//화살표 함수
var squareArea = function (x, y) {
    return x * y;
};
console.log(squareArea(4, 4));
//화살표 함수 & return 구문 생략
var triangleArea = function (w, h) {
    return (parseInt(w, 10) * parseInt(h, 10)) / 2;
};
console.log(triangleArea('3', '4'));
var sesac = {
    name: 'sesac',
    hi: function () {
        return '여기는 ' + this.name + ' 영등포 캠퍼스';
    },
    bye: function (a) {
        return "\uC791\uBCC4 \uC778\uC0AC\uB97C ".concat(a, "\uBC88 \uD588\uC2B5\uB2C8\uB2E4");
    },
};
console.log(sesac.hi());
console.log(sesac.bye(5));
//never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn() {
    while (true) {
        console.log('go!');
    }
} // 무한루프에 빠져 함수에 끝에 도달할 수 없음!
// function sum(a: number, b: string): string; // 선언부 -> 에러 사라짐
function sum(a, b) {
    return a + b;
} // 구현부
console.log(sum('가', '나')); // 가나
console.log(sum(10, 20)); //30
// console.log(sum(10,'얏호')); //error
