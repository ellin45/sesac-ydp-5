import './App.css';

const App = () => {
  const name = 'ellin';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
  };
  const title = '실습';
  const animal = 'pongki';
  const a = 3;
  const b = 5;
  return (
    <div className="App">
      <div>
        제 반려동물의 이름은 {animal} 입니다.
        <h2>{animal}는 강아지 입니다</h2>
      </div>
      <div>
        {3 + 5 === 8 ? <span>정답입니다</span> : <span>오답입니다.</span>}
      </div>
      <div>
        {a > b === true ? (
          <span>a가 b보다 큽니다</span>
        ) : (
          <span>a가 b보다 작습니다</span>
        )}
      </div>
      <div>
        "이것은 div입니다"
        <h3>"이것은 div 안에 있는 h3태그 입니다"</h3>
      </div>

      <div className="test">Hello World</div>
      <title>{title}</title>
      <div className="input">
        아이디:<input type="text" ></input>
      </div>
      <div className="input">
        비밀번호:<input type="password"></input>
      </div>
      <div className="rainbow">
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
      </div>
    </div>

  
  );
};
const FuncComponent = (props) => {
  return(
    <>
      <div>안녕?{props.name}</div>
      <div>반가워!</div>
      <h4>{props.children}</h4>
    </>
  )
}

FuncComponent.defaultProps = {
  name:'홍길동'
}
export default App;
