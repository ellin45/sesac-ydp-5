import React, { useState } from "react";

export default function Event_ex() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const addValue = () => {
    if (Name.trim().length === 0 || Email.trim().length === 0) {
      return;
    }

    const newValue = data.concat({
      id: data.length + 1,
      name: Name,
      email: Email,
    });

    setData(newValue);
    setName("");
    setEmail("");
  };

  const handleEvent = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.code === "Enter") addValue();
  };

  const deleteInfo = (targetId) => {
    const newValue = data.filter((info) => info.id !== targetId);

    setData(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={Name}
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={Email}
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          handleEvent(e);
        }}
      />
      <button onClick={addValue}>등록</button>
      {data.map((value, idx) => (
        <h2 key={value.id} onDoubleClick={() => deleteInfo(value.id)}>
          {value.name}:{value.email}
        </h2>
      ))}
    </div>
  );
}
