import React, { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";
import appleImage from "./apple.jpg";
import peachImage from "./peach.jpeg";

function App() {
  const [textColor, setTextColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [text, setText] = useState("text");
  const [img, setImg] = useState(appleImage);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select
          setImg={setImg}
          setBackgroundColor={setBackgroundColor}
          setColor={setTextColor}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setText={setText} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result
          img={img}
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </div>
    </>
  );
}

export default App;
