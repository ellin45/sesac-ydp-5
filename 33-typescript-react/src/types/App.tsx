import React from 'react';
// import './App.css';
import Student from '../components/Students';
import Card from '../components/Card';
import TodoList from '../components/TodoList'
function App() {
  const handleClick = (name: string, grade: number):void => {
    console.log(`안녕 난 ${name}이고, ${grade}학년이야!`);
  };

  return (
    <div className="App">
      <Student name="새싹" grade={3} handleClick={handleClick} />
      <br />

      <Student name="새싹" grade={3} part="CS" handleClick={handleClick} />
      <br />
    
      <Card title="오늘 배울 것은?">
       <TodoList/>
      </Card>
    </div>
  );
}

export default App;
