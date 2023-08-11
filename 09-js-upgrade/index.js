//구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요

const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];

const [one, two, three, four, five]= arr1;
console.log(one, two, three, four, five);
const [x,alpha,y,z] = arr2;
console.log(x,y,z,alpha);

let num1 = 1;
let num2 = 3;

console.log('swap 전 >',num1, num2);
[num2, num1] = [num1, num2];
console.log('swap 후>',num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

//2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함
const obj = {
    title: '엘리멘탈',
    content: '재밌어요',
    num : 5,
};

//객체 구조 분해 쓰지 않았을 때
// key가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값을 할당

console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

//객체 구조 분해 쓰고 싶다면
const { num, title, content, start} = obj;
console.log(title, content, num,);

const { n1, t1, c1} = obj;
console.log(n1, t1, c1);

//클론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!!
const { title: t2, num: n2, content: c2} = obj;
console.log(t2, c2, n2);

console.clear();

//spread 연산자
//반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!)
//spread in array
const a= [1,2,3];
const b = [4,5];
const spread = [...a, ...b];
console.log(spread);

const c = [...'HELLO'];
const d = 'HELLO'.split('');
console.log(c);
console.log(d);


//spread in object
const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatoChip = {
    ...chip,
    flavor: 'potato',
}

const sweetPotatoChip = {
    ...chip,
    flavor: 'sweet potato',
}


console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

const word1 = "abc";
const word2 = "xyz";
const word = [...word1, ...word2];
console.log(word);

//rest 파라미터
const values = [10, 20, 30, 40];

function get(a, b, ...rest){
    console.log('b>>',b); // 10
    console.log('rest>>', rest); // [20, 30]
}

get(...values);

//2. 객체에서 rest
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};

const {flavor, ...rest} = icecream;
console.log(flavor, rest);

//3. 배열에서 rest
const number = [1,2,3,4,5,6,7,8];
const[one1, two1, ...rest2] = number;
console.log(one1);
console.log(two1);
console.log(rest2);