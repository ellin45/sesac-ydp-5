import React, { useRef, useState } from "react";

export default function PracRef() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  const [list, setList] = useState([
    {
      id: "1",
      name: "민수",
      title: "안뇽",
    },
    {
      id: "2",
      name: "지민",
      title: "하이하이",
    },
    {
      id: "3",
      name: "희수",
      title: "멋쟁이",
    },
  ]);

  const newList = () => {
    if (name.trim() === "") return nameRef.current.focus();
    if (title.trim() === "") return titleRef.current.focus();
    const addList = list.concat({
      name,
      title,
    });
    setList(addList);
    setName("");
    setTitle("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        newList();
    }
  };
  return (
    <div>
      작성자 : {""}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        ref={nameRef}
      />
      제목 : {""}
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        ref={titleRef}
      />
      <button onClick={newList}>작성</button>
      <table border="1" cellPadding="15" cellSpacing="1" width="500" center>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{value.title}</td>
              <td>{value.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
