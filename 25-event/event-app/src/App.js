// import logo from './logo.svg';
import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent'
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <br/>
      <ClassBind/>
      <br/>
      <Counter/>
      <br/>
      <Handler_ex/>
    </div>
  );
}

export default App;
