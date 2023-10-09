import React, { useState, useReducer } from "react";

const initState = { isLogin: false, message: "" };

const reducer = (prevState, action) => {
  switch (action.type) {
    case "WRONG_ID":
      return { isLogin: false, message: "아이디가 다릅니다!" };
    case "WRONG_PW":
      return { isLogin: false, message: "비밀번호가 다릅니다!" };
    case "WRONG_ID_PW":
      return { isLogin: false, message: "아이디와 비밀번호가 다릅니다!" };
    case "LOGIN":
      return { isLogin: true };
    case "LOGOUT":
      return { isLogin: false };
    default:
      return { isLogin: prevState.isLogin, message: prevState.message };
  }
};
export default function LoginEx({ id, pw }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [input, setInput] = useState({ inputId: "", inputPw: "" });
  const { inputId, inputPw } = input;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginHandler = () => {
    console.log(inputId);
    console.log(inputPw);
    if (inputId !== id && inputPw === pw) {
      dispatch({ type: `WRONG_ID` });
    } else if (inputId === id && inputPw !== pw) {
      dispatch({ type: `WRONG_PW` });
    } else if (inputId !== id && inputPw !== pw) {
      dispatch({ type: `WRONG_ID_PW` });
    } else if (inputId === id && inputPw === pw) {
      dispatch({ type: `LOGIN` });
    }
  };

  const logoutHandler = () => {
    dispatch({ type: `LOGOUT` });
    setInput({ inputId: "", inputPw: "" });
  };

  return (
    <div>
      <div>
        <h1>Login Ex</h1>
        <h3>
          정답 아이디 : {id}/ 정답 비번: {pw}
        </h3>
      </div>
      {!state.isLogin ? (
        <div>
          ID :
          <input
            type="text"
            name="inputId"
            value={inputId}
            onChange={onChange}
          />
          <br />
          PW :
          <input
            type="text"
            name="inputPw"
            value={inputPw}
            onChange={onChange}
          />
          <br />
          <button onClick={loginHandler}>Login</button>
          {state.message ? <div>{state.message}</div> : ""}
        </div>
      ) : (
        <div>
          <h3>환영합니다 {id}님!</h3>
          <button onClick={logoutHandler}>logout</button>
        </div>
      )}
    </div>
  );
}
