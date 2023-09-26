// import './App.css';
// import Button from './Button';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
// import MyComponent3 from './MyComponent3';
// import Test from './Test';
// import Test2 from './Test2';

// function App() {
//   return (
//     <div className="App">
//       <FunctionComponent name="새싹" />
//       <FunctionComponent />

//       <hr />
//       <ClassComponent name="새싹" />
//       <ClassComponent />

//       <hr />
//       <Button link="https://www.google.com">Google</Button>

//       <hr />
//       <div>
//       <MyComponent />
//       <MyComponent />
//       <MyComponent />
//       <MyComponent />
//       </div>

//       <div>
//       <MyComponent />
//       <MyComponent2 />
//       <MyComponent3 />
//       </div>

//       <div>
//       <Test/>
//       <Test2/>
//       </div>
//     </div>
//   );
// }
 	
// import React from 'react';
// import MyComponent from './MyComponent';
 
// import './App.css';
// import Button from './Button';
// import ClassComponent from './ClassComponent';
// import FunctionComponent from './FunctionComponent';
// import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
// import MyComponent3 from './MyComponent3';
// import Test from './Test';
// import Test2 from './Test2';

// function App() {
//   return (
//     <div className="App">
//       <FunctionComponent name="새싹" />
//       <FunctionComponent />

//       <hr />
//       <ClassComponent name="새싹" />
//       <ClassComponent />

//       <hr />
//       <Button link="https://www.google.com">Google</Button>

//       <hr />
//       <div>
//       <MyComponent />
//       <MyComponent />
//       <MyComponent />
//       <MyComponent />
//       </div>

//       <div>
//       <MyComponent />
//       <MyComponent2 />
//       <MyComponent3 />
//       </div>

//       <div>
//       <Test/>
//       <Test2/>
//       </div>
//     </div>
//   );
// }
 	
	
import React from "react";
// import MyComponent from "./MyComponent";
// import Props from "./Food"; 
// import Props from "./BestSeller";
	
import Props from "./TextProps";

// const App = () => {
//   return ( 
// //   <MyComponent name="리액트" favoriteNumber={2}>
// //     리액트
// //   </MyComponent>

//    <Props 
//     title="나의 하루는 4시 40분에 시작된다"
//     author="김유진"
//     price="13,500원"
//     type="자기계발서"
//   /> 

//   );
// };
 	
const App = () => {
    const my_func = () => {
     console.log("콘솔 띄우기 성공!");
    };
    
    return (
     <div>
      <Props
       text="App 컴포넌트에서 넘겨준 text props입니다."
       valid={ my_func }
      />
     </div>
    );
   };
export default App;