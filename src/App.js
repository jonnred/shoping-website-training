import React from 'react';
import './App.css';

function App() {
  let counting= 1;
  let counter = ()=> {
    counting++;
    console.log("heyy")
  }
  
  
  return (
    <div className="App">
      <h1>hey</h1>
      <h1>men</h1>
      <button onClick={counter}>{counting}</button>
    </div>
  );
  
}

export default App;
