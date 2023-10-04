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

  const deleteList = (targetIdx) => {
    const newList = list.filter((_, idx) => idx !== targetIdx);
    setList(newList);
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
          <select>
            <option defaultChecked>작성자</option>
            {list.map((value) => {
              <option key={value.writer}>{value.writer}</option>;
            })}
          </select>
        </button>
        <input type="text" placeholder="검색어"></input>
        <button onClick={addList}>검색</button>
      </div>
      <div>
        <table border="1" cellSpacing="0" cellPadding="15">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {list.map((value, idx) => (
              <tr>
                <td key={idx} onDoubleClick={() => deleteList(idx)}>
                  {idx + 1}
                </td>
                <td key={value.title} onDoubleClick={() => deleteList(idx)}>
                  {value.title}
                </td>
                <td key={value.writer} onDoubleClick={() => deleteList(idx)}>
                  {value.writer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
