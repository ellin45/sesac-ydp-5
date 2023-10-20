//Tuple
let drink: [string, string] = ["사이다", "롯데"];
drink[0] = 'cider';
drink[1] = 'lotte';
//drink.push('dkdkd') 이렇게 하면 tuple한 의미가 없음  tuple 의 한계
console.log(drink);

//readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
drink.push('얏호'); //error

type productInfo = [number, string, number]; // type 별칭으로 type 선언
let product1: productInfo = [1, '로지텍 MX master3' ,130000];
let product2: productInfo = [2, '로지텍 K380' ,52000];
// let product3: productInfo = [2, '로지텍 K380' ,'Apple']; typeError

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}


console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake{
  choco,
  vanilla,
  kiwi = '키위 케이크',
}
console.log(Cake.choco);
console.log(Cake.kiwi);

//명시적으로
let val: any;
val = true;
val = '하이';
val = '19999';
val = { name: 'sesac'};

//암묵적으로
let val2;
val2 = false;
val2 = '바이';

type olympic = readonly [object, boolean];
let game: olympic = [{name: "쇼트트랙", type: "혼성 계주"}, true];

///////////////////////////////////////////////////
//Type vs interface

//1. interface
interface Student {
  name: string;
  isPassed: boolean;
  // addr: string;
}

const student1: Student = {
  name: 'jinheyoung',
  isPassed: true,
  // addr: 'seoul',
}
const student2: object = {
  name: 'jinheyoung',
  isPassed: true,
  // addr: 'seoul',
}

// interface 상속
//A+ A, B, C, D, F
// type Score = 'A+' | 'B' | 'C'|'D'|'F';

enum Score {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}
interface BaseballClub extends Student{
  position:string;
  height: number;
  backNumber?: number; // ?: 있어도 되고 없어도 됨.
  // [grade: number]: string;
  [grade: number]: Score;
}

const otani: BaseballClub = {
  name: 'otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  1: 'A+' // 학년: 점수
  // 2: 'NP',
};
console.log(otani);

otani.position = '투수';
otani['height'] = 200;
// otani.backNumber = 16; //error: backNumber readonly
console.log(otani);


//type vs enum
type Bp1 = 500 | 700 | 1000;
enum Bp2{
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

//교차 타입
interface Toy {
  name: string;
  start(): void;
}

interface Car{
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: Toy & Car = {
  name: 'tayo',
  start() {
    console.log('출발!!!');
  },
  color: 'blue',
  price: 5000,
};

//2. type
type Gender = 'F' | 'M';
type Person = {
  name: string,
  age?: number;
  like?: string[];
  gender: string;
}

let daniel: Person = {
  name: 'daniel',
  age: 20,
  gender: 'F', // Gender 타입에 선언된 값만 넣을수 있음
  like: ['minji', 'hani'],
}
type category = 'web' | 'mobile';
interface Game {
 title: string;
 price: number;
 desc?: string;
 category: string;
 platform: string;
}

let heroGame_A:Game = {
  title: '동물의 숲',
  price : 450000,
  desc: '모두 모여봐요 동물의 숲',
  category: '멀티 닌텐도 게임 ',
  platform : 'mobile'
}

let heroGame_B:Game = {
  title: '메이플 스토리',
  price : 5000,
  desc: '캐릭터 키우는 게임',
  category: 'MMORPG',
  platform : 'web'
}

