// pass by value
// : 원시 타입은 값(value)이 복사되어 전달
let num = 1;
let num2 = num;
console.log(num, num2); // 1 1
console.log(num === num2); // true

num = 5; // 1 -> 5
console.log(num, num2); // 5 1
console.log(num === num2); // false

// pass by reference
const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2); // { one: 1, two: 2 }
console.log(obj === obj2); // true

obj.five = 5;
console.log(obj, obj2); // { one: 1, two: 2, five: 5 }
console.log(obj === obj2); // true
// obj와 obj2는 현재 같은 데이터르 같고 참조값(address, 주소)도 같다

//////
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

obj3.five = 5;
console.log(obj3, obj4);
console.log(obj3 === obj4);

///////////
const arr = [1, 2];
const arr2 = arr;
// arr과 arr2 서로 같은 참조값을 가짐

console.log(arr, arr2);
console.log(arr === arr2); // true

arr.push(5);
console.log(arr, arr2);
console.log(arr === arr2); // true

const arr3 = [1, 2];
const arr4 = [1, 2];
console.log(arr3, arr4);
console.log(arr3 === arr4);

arr3.push(5);
console.log(arr3, arr4);
console.log(arr3 === arr4);

//js 표준 내장 객체
// 1. Date 객체 : 시간 날짜
let now = new Date();

console.log(now);

//타임스탬프 ( timestamp);
// : 1970 . 1. 1기준으로 흘러간 밀리초(ms)를 나타내는 정수
// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1800);
console.log(jan_02_1970);

//new Date(date_string);
let date1 = new Date('2023-07-17');
console.log(date1);

let date2 = new Date('2023', '07', '17');
console.log(date2);

//관련 메서드

console.table(date1.getFullYear());
console.table(date1.getMonth()); // 0~11 주의
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
console.table(date1.getMilliseconds());
console.table(date1.getDay());

//퀴즈
let todayDay = new Date().getDay();

if (todayDay=== 0 || todayDay=== 6) {
  console.log('주말');
} else {
    console.log('평일')
}
(todayDay === 0 || todayDay === 6) ? console.log('주말') : console.log('평일')
// 메서드
console.log(Math.min(100, -2, 0, 5));

//퀴즈
//1 ~ 100
console.log(Math.floor(Math.random() * 100 + 1))

// 20 ~ 22
console.log(Math.floor(Math.random() * 3 +20))

