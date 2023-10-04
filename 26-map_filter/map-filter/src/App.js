import React, { useState } from "react";
import Alphabet from "./Alphabet";
import Event_ex from "./ex/Event_ex";
import Prac from "./Prac";
import PracRef from "./PracRef";

function App() {
  return (
    <div className="App">
      <Alphabet />
      <br />
      <Event_ex />
      <br />
      <Prac />
      <br />
      <hr/>
      <PracRef />
    </div>
  );
}

export default App;
