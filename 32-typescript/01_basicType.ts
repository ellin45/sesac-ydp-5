let a: number = 1;
a = 2;
console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

// 타입 추론(암묵적으로)
let aa = 1;
let bb = 'hi'
let cc = false;
let dd;
let ee = null;

//배열
let numArr: number[] = [1,2,3,4,5];
console.log(numArr);
let strArr: Array<string> = ['apple', 'banana', 'melon'];
console.log(strArr);

// 배열 원소가 여러 타입일 경우
let arr1: (number | boolean | string)[] = [1,true,'string'];

//boolean, null, number array가 원소가 될 수 있는 arr2
let arr2: Array<boolean | null | number[]> = [true, false, null, [1,2,3]];

//어떤 자료형이든 상관 없는 배열
let arr3: any[] = [1,2,3,'wow', true, null];

//object
let obj1: object = {
  name: 'sean',
  grade: 1,
}

console.log(obj1);