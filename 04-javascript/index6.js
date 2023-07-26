// 조건문

// if문
// if (5 > 3) {
//     console.log('얍!');
//   }
  
//   let number = Number(prompt('숫자를 입력해주세요!'));
  // 1. prompt() 로 사용자로부터 값을 입력받고(문자열)
  // 2. Number() 문자열-> 숫자형 형변환
  // 아래와 동일한 코드
  // let number2 = prompt('숫자 입력해주세요!')
  // number2 = Number(number2)

//   if(number > 10) {
//     console.log(`입력한 수는 10보다 크군요`);
//   } else {
//     console.log('입력한 수는 10보다 작거나 같네요!');
//   }
//   if(number > 10) {
//     console.log(`입력한 수는 10보다 크군요`);
//   } else if (number === 10) {
//     console.log('입력한 수는 10이네요!');
//   } else {
//     console.log('입력한 수는 10보다 작네요');
//   }

// if( number > 100 || number < 0) {
//     console.log('입력값이 잘못되었습니다. 숫자의 범위는 0~100');
// }else if(number >= 90){
//     console.log('A')
// }else if(number >= 80){
//     console.log('B')
// }else if(number >= 70){
//     console.log('C')
// }else if(number >= 60){
//     console.log('D')
// }else {
//     console.log('E')
// }

// let age = 18;
// if(age >= 20) {
//     console.log('성인');
// }else if (age >= 17){
//     console.log('고등학생');
// }else if (age >= 14){
//     console.log('중학생');
// }else if (age >= 8){
//     console.log('초등학생');
// }else if (age >= 0){
//     console.log('유아');
// }

//중첩 if문
// let userID = 'abccd01';
// let userPw = 'aaaa';

// // 아이디,비밀번호 검사하는 함수
// function loginUser(){
//     let inputID = prompt('아이디 입력');
//     let inputPw = prompt('비밀번호 입력');

//     //1. userID inputId가 같다면
//     // userPw 와 inputPw를 비교
//     // inputId에 빈 값 입력됬다면
//     // 아이디 입력 안함 문구 반환
//     //두 경우가 아니라면 (inputId가 틀렸을 때)
//     // 아이디 틀림 문구 반환

//     if(userID === inputID){
//         if(userPw === inputPw){
//             return '로그인 성공';
//         } else {
//             return '비번 오류! 로그인 실패';
//         }
//     }else if(inputID === ''){
//         return '아이디 입력 안했음';
//     }else {
//         return '아이디 오류! 로그인 실패';
//     }
// }
// const result = loginUser();
// // -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

//switch문
// -하나 이상의 case 문으로 구성
// default 필수는 아니지만 쓰길 권장
//break : 조건을 빠져 나갈때 사용하는 키워드
// let a = 3;
// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log('a가 3이군요!');
//         break;
//     case 4:
//         console.log('a가 4군요');
//         break;
//     case 5:
//         console.log('a가 5군요');
//         break;
//     default:
//         console.log('a가 무슨 값인지 모르겠습니다');
//         break;
// }

//퀴즈.학점 계산기
// let score = Number(prompt('점수를 입력하세요')/10);

// switch (parseInt(score)/10) {
//  case 9: 
//     alert('A');
//     break;
//  case 8:
//     alert('B');
//     break;
//  case 7:
//     alert('C');
//     break;
//  case 6:
//     alert('D');
//     break;
//  default:
//     alert('F');
//     break;
// }


// //삼항 연산자
// let num = 5;

// if (num % 2 === 1) {
//     console.log('홀수');
// } else {
//     console.log('짝수');
// }

// num % 2 === 1 ? console.log('홀수') : console.log('짝수');

//실습
let now = new Date().getHours();

now < 12 ? console.log('오전') : console.log('오후');
