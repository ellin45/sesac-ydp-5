import logo from './logo.svg';
import './App.css';
import Counter from './Couter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <div>
        <SayFunction/>
      </div>
      <hr/>
      <CounterFunction value={'Plus 1'}/>
    </div>
  );
}

export default App;
