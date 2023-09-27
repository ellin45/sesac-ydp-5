import {useState} from "react";

export default function State_eventHandling() {
  const [color, setColor] = useState("검정색 글씨");
  const [enColor, setEnColor] = useState("black");

  function RedColor(e) {
    setColor("빨간색 글씨");
    setEnColor("red");
  }
  function BlueColor(e) {
    setColor("파랑색 글씨");
    setEnColor("blue");
  }

  return (
    <div>
      <h1 style={{ color: enColor}}><span>{color}</span></h1>
      <button onClick={RedColor}>빨간색</button>
      <button onClick={BlueColor}>파란색</button>
    </div>
  );
}
