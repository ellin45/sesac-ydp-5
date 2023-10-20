var a = 1;
a = 2;
console.log(a);
var b = 'str';
var c = true;
var d;
var e = null;
// 타입 추론(암묵적으로)
var aa = 1;
var bb = 'hi';
var cc = false;
var dd;
var ee = null;
//배열
var numArr = [1, 2, 3, 4, 5];
console.log(numArr);
var strArr = ['apple', 'banana', 'melon'];
console.log(strArr);
// 배열 원소가 여러 타입일 경우
var arr1 = [1, true, 'string'];
//boolean, null, number array가 원소가 될 수 있는 arr2
var arr2 = [true, false, null, [1, 2, 3]];
//어떤 자료형이든 상관 없는 배열
var arr3 = [1, 2, 3, 'wow', true, null];
//object
var obj1 = {
    name: 'sean',
    grade: 1,
};
console.log(obj1);
