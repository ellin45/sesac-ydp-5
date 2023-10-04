import React, { useState } from "react";

export default function Prac() {
  const [list, setList] = useState([
    {
      id: "1",
      writer: "작성자",
      title: "제목",
    },
  ]);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");

  const addList = () => {
    if (writer.trim().length === 0) {
      writer("");
      return;
    }
    if (title.trim().length === 0) {
      title("");
      return;
    }
    const newList = list.concat({
      Writer: writer,
      Title: title,
    });

    setList(newList);
    setWriter("");
    setTitle("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addList();
    }
  };
  return (
    <div>
      <fieldset>
        작성자:{" "}
        <input
          type="text"
          value={writer}
          placeholder="작성자"
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        제목 :
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={addList}>작성</button>
      </fieldset>
      <div>
        작성자 :{" "}
        <button type="radio">
          <select>작성자</select>
        </button>
        <input type="text" placeholder="검색어"></input>
        <button>검색</button>
      </div>
    </div>
  );
}
