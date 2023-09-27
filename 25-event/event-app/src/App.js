// import logo from './logo.svg';
import './App.css';
import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent'
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import State_eventHandling from './State_eventHandling';
import Disappear from './Disappear';

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
      <br/>
      <State_eventHandling/>
      <br/>
      <Disappear/>
      <br/>
      <Props_state_event/>

    </div>
  );
}

export default App;
