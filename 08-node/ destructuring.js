
//구조분해 할당
// 1. 객체를 구조분해
const cookie = {
    choco: '초코맛 쿠키',
    vanilla: '바닐라맛 쿠키',
    orange: '오렌지맛 쿠키',
}

console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);

//객체를 구조분해 해보자!
const {choco,vanilla,orange} = cookie;
console.log(choco);
console.log(vanilla);
console.log(orange);
//2. 배열([])를 구조분해


