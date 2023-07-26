// //반복문

// //for문
// for(let i = 0; i < 10; i += 2){
//     // i가 0~9 총 10번 반복
//     console.log('안녕', i);
// }

// for(let i=0; i< 10; i +=2){
//     // i가 0~9 총 10번 반복
//     console.log('안녕'. i);
// }

// // 1 ~ 5 출력
// for(let i=0; i <= 5; i++){
//     console.log(i);
// }
// console.log('~~~~~~~~~');

// // 5~1 출력
// for(let i =5; i >= 1; i--){
//     console.log(i);
// }
// console.log('~~~~~~~~~');

// let n = 10;
// let sum = 0;
// for(let i = 1; i < n; i++){
//     sum += i;
//     console.log(i, sum);
// }
// console.log(sum);
// console.log('-----------');

// //배열 , for문
// const fruits = ['사과', '배', '포도', '망고'];
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let f = 0; f < fruits.length; f++){
//     console.log(fruits[f]);
// }

// // 1 ~ 20 중에서 짝수일 때의 합 구하기
// let sum2 = 0; // 합을 의미하는 변수
// // 1~20 까지 숫자를 반복
// // 현재 반복 숫자가 짝수라면 sum2 에 더하기
// for (let i = 1; i<=20; i++){
//     // console.log(i);
//     if(i % 2 === 0) {
//         sum2 = sum2 + i;
//         console.log(i, sum2);
//     }
// }

// //while문 
// let idx = 0;
// while(idx < 10) {
//     console.log('안녕', idx);
//     idx += 1;
// }
// console.log('------------');

// let idx2 = 0;
// while(true) {
//     console.log('안녕', idx2);
//     idx2 += 1;
//     if(idx2 === 10) {
//         break;
//     }
// }

// //continue를 이용해 0~99 까지 중에서 홀수의 합
// let sum3 = 0;
// for (let i= 0; i <100; i++){
//     if(i % 2 === 0){
//         continue; // 이번 
//     }

//     sum3 += 1;
//     console.log(i, sum3);
// }
// console.log(sum3);

// //실습
//2또는 5의 배수의 총합
let sum = 0;
for (let i = 0; i<=100; i++){
    if(i % 2 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);


// //13의 배수 && 홀수

// let number = Number(prompt('숫자를 입력하세요'));

// for (let i= 0; i<=1000; i++){
//     if(number % 13 === 0 && number % 2 === 1){

//         console.log("13의 배수면서 홀수 인 숫자입니다")
//     }else {
//         console.log("13의 배수면서 홀수 인 숫자가 아닙니다")
//     }
// }

//구구단 만들기

// for(let i=2; i< 10; i++){
//     console.log(`----${i}단---`);
//     for(let j=1; j < 10; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
//     }
// }

