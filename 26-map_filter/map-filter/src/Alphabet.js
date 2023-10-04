import React, { useState } from "react";

export default function Alphabet() {
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: "a",
    },
    {
      id: 2,
      alpha: "p",
    },
    {
      id: 3,
      alpha: "p",
    },
    {
      id: 4,
      alpha: "l",
    },
    {
      id: 5,
      alpha: "e",
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    if (inputAlpha.length === 0) {
      return;
    }
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlpha);
    setInputAlpha("");
  };
  const deleteAlpha = (targetId) => {
    //targetId: 삭제될 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    console.log(e);

    // bugfix: IME(input Method Editor) 문제 해결
    if(e.nativeEvent.isComposing){
      return;
    }
    if (e.code === 'Enter') {
      addAlpha();
    }
    // if(e.keyCode === 13){
    //   addAlpha();
    // }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </div>
  );
}
