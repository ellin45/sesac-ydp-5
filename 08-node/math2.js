const add = (a, b) => a+b;
const PI = 3.14592;
const E = 2.718;
const subtract = (c,d) => c-d;
const divide = (e,f) => e/f;

//case1. 객체로 내보내기
module.exports = {
    add: add,
    PI: PI,
    E: E,
    subtract: subtract,
    divide: divide,
};

//case2. 하나씩 내보내기
module.exports.add = add;
module.exports.PI = PI;
module.exports.E = E;

//case2. 간단히
exports.add = add;
exports.PI = PI;
exports.E = E;
// module.exports = {
//     add, // obj에서 key, value가 동일 할 때 생략 가능!
//     PI,
//     E,
// };
