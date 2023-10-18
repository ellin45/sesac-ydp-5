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
