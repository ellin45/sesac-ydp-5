import React from "react";

export default function Input({ setText }) {
  return (
    <>
      내용 :{" "}
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="내용을 입력하세요"
      ></input>
    </>
  );
}
