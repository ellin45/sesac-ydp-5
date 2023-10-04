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
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(list);
  const [searchType, setSearchType] = useState("writer");
  const [nextId, setNextId] = useState(2); 

  const addList = () => {
    if (writer.trim().length === 0) {
      setWriter("");
      return;
    }
    if (title.trim().length === 0) {
      setTitle("");
      return;
    }

    const newId =
      list.length > 0 ? String(Number(list[list.length - 1].id) + 1) : "1";
    const newList = list.concat({
      id: String(newId),
      writer,
      title,
    });
    setNextId(nextId + 1);
    setList(newList);
    setWriter("");
    setTitle("");
    setSearch("");
    setFiltered(newList);
  };

  const handleSearch = () => {
    if (search === "") {
      setFiltered(list);
      return;
    }
    const result = list.filter((value) => {
      switch (searchType) {
        case "id":
          return String(value.id) === search;

        case "writer":
          return value.writer.includes(search);
        case "title":
          return value.title.includes(search);
        default:
          return false;
      }
    });
    setFiltered(result);
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
  const showAll = () => {
    setFiltered(list);
  };
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
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
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
        <button onClick={addList}>작성</button>
      </fieldset>
      <div>
        <button type="radio">
          <select onChange={handleSearchTypeChange}>
            <option value="writer" defaultChecked>
              작성자
            </option>
            <option value="id">순번</option>
            <option value="title">제목</option>
          </select>
        </button>
        <input
          type="text"
          placeholder="검색어"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>검색</button>
        <button onClick={showAll}>전체</button>
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
          {filtered.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="3">검색 결과에 맞는 항목이 없습니다.</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {filtered.map((value, idx) => (
                <tr key={idx}>
                  <td onDoubleClick={() => deleteList(idx)}>{value.id}</td>
                  <td onDoubleClick={() => deleteList(idx)}>{value.title}</td>
                  <td onDoubleClick={() => deleteList(idx)}>{value.writer}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
