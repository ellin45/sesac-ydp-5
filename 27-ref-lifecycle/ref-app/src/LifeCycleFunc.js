import React, { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ background: "green" }}>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}> On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </div>
  );
}

////////////////////////////////////////////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 t면 t 반환
// A || B : 두 개의 피연산자 중에서 하나만 t여도 t반환

// console.log(true && true); // true
// console.log(false && true); // false

// console.log(true || false); // true
// console.log(false || true); // true

// const xx = 5;
// const yy = 7;

// // 삼항연산자 예시
// const result1 = xx > yy ? 'xx가 큼' : 'yy가 큼';
// console.log(result1); // yy가 큼

// // 단축평가 (&&, 논리곱)
// const result2 = xx > yy && 'xx가 큼';
// console.log(result2); // false
// const result3 = xx < yy && 'yy가 큼';
// console.log(result3); // yy가 큼

// // 단축평가 (||, 논리합)
// const result4 = xx || 100;
// console.log(result4); // 5

// const nameEx = '홍길동';
// const nameEx2 = null;
// console.log(nameEx || '이름없음');
// console.log(nameEx2 || '이름없음');