import './styles/App.css';
import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import ParcSass from './PracSass';
import PracCircle from './PracCircle'

function App() {
  return (
    <div className="App">
      <ParcSass/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>원 애니메이션</h2>
      <PracCircle/>
      <h1>React Styling</h1>
      <h2>Css module</h2>
      <CssModuleComponents />
      <hr />
      <h2>Sass</h2>
      <SassComponent />
      <h2>StyledComponent</h2>
      <StyledComponent />
      <hr/>
    </div>
  );
}

export default App;
