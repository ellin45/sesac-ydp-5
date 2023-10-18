import '../src/styles/Box.css';
import { useSelector, useDispatch } from 'react-redux';
import { Box1Container, Box2Container, Box3Container, Box4Container} from './components/BoxesContainer';

function App() {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      {/* <Box1Container/> */}
      <Bank/>
    </div>
  );
}
export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2Container />
    </div>
  );
};
export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3Container />
    </div>
  );
};
export const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4Container />
    </div>
  );
};
export const Box4 = ({number, onPlus, onMinus, isVisible}) => {
  // const number = useSelector((state) => state.counter.number);
  // const isVisible = useSelector((state) => state.isVisible);
  // const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4: {number}</h2>

      <h2>isVisible 값은 {isVisible ? '참' : '거짓'}이다.</h2>
      <button onClick={onPlus}>PLUS</button>
      <button onClick={onMinus}>MINUS</button>

    </div>
  );
};
export const Bank = ({number, onPlus, onMinus}) => {
  return (
    <div className="Box">
      <h1>React Redux 실습 </h1>
      <hr/>
      <h2>코딩온 은행</h2>
      <input type='text' number={number}></input>

      <button onClick={onPlus}>입금</button>
      <button onClick={onMinus}>출금</button>

    </div>
  );
}
export default App;
