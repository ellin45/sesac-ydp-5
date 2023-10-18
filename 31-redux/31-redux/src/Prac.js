import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Prac() {
  const [num, setNum] = useState(0);
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <div className="Prac">
      <h1>React Redux 실습 </h1>
      <hr />
      <h2>코딩온 은행</h2>
      <h3>잔액 : {number} </h3>
      <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}></input>

      <button onClick={()=> dispatch({type : 'IN', payload: num}) }>입금</button>
      <button onClick={()=> dispatch({type : 'OUT', payload: num})}>출금</button>
    </div>
  );
}
