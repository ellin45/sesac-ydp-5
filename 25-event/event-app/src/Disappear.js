import {useState} from "react";

export default function Disappear() {
  const [msg, setMsg] = useState("안녕하세요");
  const [msg1, setMsg1] = useState("사라져라");

  const Disappear = ()=> {
    setMsg('');
  }

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={()=>Disappear()}>{msg1}</button>
    </div>
  );
}
