import React from 'react';

import './App.css';


function App() {
  debugger
  return (
    <div>
      This is app component
      <Rating />
      <Accordion />
    </div>
  );
}

function AppTitle() {
  return "This is App component"
}

function Rating() {
  debugger
  return (
    <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
    </div>
  )
}

function Accordion() {
  debugger
  return <div>
    <h3>Меню</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>

}



export default App;




