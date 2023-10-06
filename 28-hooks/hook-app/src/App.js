import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducer from "./components/UseReducer";
import useTitle from "./components/hooks/useTitle";
import useToggle from "./components/hooks/useToggle";
import Faq from "./components/Faq";

function App() {
  useTitle("React Hooks 연습중입니다");
  useToggle("hello");

  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={7} />
      <hr />
      <UseReducer />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
