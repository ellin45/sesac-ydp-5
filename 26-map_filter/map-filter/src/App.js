import React, { useState } from "react";
import Alphabet from "./Alphabet";
import Event_ex from "./ex/Event_ex";
import Prac from "./Prac";
function App() {
  return (
    <div className="App">
      <Alphabet />
      <br />
      <Event_ex />
      <br />
      <Prac />
    </div>
  );
}

export default App;
