import logo from './logo.svg';
import './App.css';
import Counter from './Couter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Prac1 from './Prac1';
import Prac2 from './Prac2';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <div>
        <SayFunction />
      </div>
      <hr />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <Prac1 />
      <hr />
      <Prac2/>
      <Prac2 />
    </div>
  );
}

export default App;
