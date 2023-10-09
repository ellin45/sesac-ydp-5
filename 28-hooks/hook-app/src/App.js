import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducer from "./components/UseReducer";
import useTitle from "./components/hooks/useTitle";
import useToggle from "./components/hooks/useToggle";
import Faq from "./components/Faq";
import Todo from "./components/Todo";
import LoginEx from "./components/LoginEx";
import Box from "./components/hooks/useIntersectionObserver"

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
      <hr />
      <br />
      <br />
      <br />
      <Todo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <LoginEx id="ellin" pw="1234" />
      <br />
      <br />
      <br />
      <br />
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </div>
  );
}
function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>
}

export default App;
