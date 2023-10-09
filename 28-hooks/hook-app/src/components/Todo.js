import React, { useState, useRef } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const listRef = useRef(null);

  const addHandler = () => {
    if (list.length >= 10) return;

    if (!todo.trim()) {
      return listRef.current.focus();
    }

    const newTodo = {
      id: list.length + 1,
      todo,
      isChecked: false,
    };

    const newList = [...list, newTodo];

    setList(newList);

    setTodo("");
  };

  const checkHandler = (id) => {
    setList((prevList) => {
      return prevList.map((el) => {
        if (el.id === id) {
          return { ...el, isChecked: !el.isChecked };
        }
        return el;
      });
    });
  };

  const deleteHandler = () => {
    const filteredList = list.filter((todo) => !todo.isChecked);
    setList(filteredList);
  };
  return (
    <div>
      <h1>Todo 실습</h1>
      <input
        type="text"
        value={todo}
        placeholder="할 일 입력..."
        onChange={(e) => setTodo(e.target.value)}
        ref={listRef}
      />
      <button onClick={addHandler}>추가</button>
      <div>
        <ul>
          {list.map((el) => {
            return (
              <li key={el.id}>
                <input type="checkbox" onChange={() => checkHandler(el.id)} />
                {el.todo}
              </li>
            );
          })}
        </ul>
      </div>
      {list.length >= 10 && <h3>할 일이 너무 많아요!</h3>}
      <button onClick={deleteHandler}>완료된 할 일 및 삭제</button>
    </div>
  );
}
