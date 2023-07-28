// // 문자열 관련 내장 메서드
// let str1 = 'Strawberry Moon';
// let str2 = '    Strawberry Moon    ';

// // 문자열 인덱싱
// console.log(str1[0]);
// console.log(str1[0] + str1[12]);

// // Sonny
// console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// // 문자열의 길이 (length는 메서드가 아닌 "속성")
// console.log(str1.length);
// console.log(str2.length);

// // 대/소문자 변환
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// // 양끝 공백 제거
// console.log(str2.trim());
// console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// // indexOf() 글자 위치 찾기
// // 위치(index): 0부터 시작
// console.log(str1.indexOf('w'));
// console.log(str1.indexOf('r'));
// console.log(str1.indexOf('x')); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// // slice() 문자열 자르기
// console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
// console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// // replace() 문자열 바꾸기
// console.log(str1.replace('a', 'x'));
// console.log(str1.replace('r', 'x'));
// console.log(str1.replaceAll('r', '*'));

// // split() 문자열 쪼개기 (배열로 변환)
// let date = '23.03.10';
// console.log(date.split('.'));
// console.log(date.split('3'));

// // repeat()
// console.log('hi'.repeat(5));

// /////////////////////////////////
// //배열에서 반복문 사용하기
// // - for문
// // - for of문
// // - forEach()문

// const arr3 = [1,2,3,4,5];
// const alphabets = ['a','b','c','d'];

// for(let a = 0; a < arr3.length; a++){
//     console.log(arr3[a]);
// }

// for(let alpha of alphabets){
//     console.log(alpha);
// }

// alphabets.forEach(function(alpha){
//     console.log(alpha);
// });

// alphabets.forEach(function(alpha,idx) {
//     console.log(alpha, idx);
// })

// alphabets.forEach(function(alpha,idx,arr) {
//     console.log(alpha, idx,arr);
// })

// let numbers = [1,2,3,4,5,6];
// var sum1 = 0;
// var sum2 = 0;
// var sum3 = 0;

// for(let i=0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     sum1 += numbers[i];
// }

// for(let num of numbers) {
//     sum2 += num;
// }

// numbers.forEach((num) => {
//     sum3 += num;
// })
// console.log(sum1,sum2,sum3);

// //map, filter, find 메서드
// const arr4 = [1,2,3,4,5];

// //map() : 배열 내 모든 원소에 대해 연산한 결과를 모아 "새로운 배열" 반환
// const map_result = arr4.map((e) =>e * 2);

// console.log(map_result);

// //filter() : 주어진 함수의 조건을 통과하는 요소를 모아 새로운 배열 반환
// const filterResult = arr4.filter((e) => e > 2);
// console.log(filterResult);

// // find() : 특정 요건을 만족하는 첫번재 요소 반환
// const findResult  = arr4.find((e) => e > 2);
// console.log(findResult);

// 퀴즈

const words = ['dog','cat','rabbit','apple','wow'];

let answer = words.filter((e)=> e.length > 3);
console.log(answer);

let answer1 = words.filter((el)=> el.includes('a'));
console.log(answer1);

