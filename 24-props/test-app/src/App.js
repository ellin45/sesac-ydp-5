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
 	
import React from 'react';
 
const MyComponent = props => {
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};
 
MyComponent.defaultProps = {
    name: '기본 이름'
};
 
export default MyComponent;