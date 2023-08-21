const path = require('path');
const extname = path.extname('hello.txt'); // 파일명에서 확장자만 추출
const base = path.basename('hello.txt, ext'); // basename : 원본 파일에서 확장자를 제외한 파일 이름만 추출
const result = base + Date.now() + ext; // 파일 이름 + 날자 + 확장자

console.log(ext); // ./txt
console.log(base);// hello
console.log(result);

//파일명 결과에 왜 Date.now()를 ㅊ추가해서 저장할까?
// 1. 파일 이름 중복을 막기 위해
// 2. 파일 이름만 보고 파일이 저장된 시점 유추 가능