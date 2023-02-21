import React from 'react';

import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Accordion/Rating';

function hello() {
  debugger
  alert('Hello IT-KAMASUTRA')
}
// hello();

function App() {
  console.log("App rendering")
  return (
    <div>
      <input />
      <input type="date" />
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />

    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering")
  return <>This is App component"</>
}

// function Rating() {
//   console.log("Rating rendering")
//   return (
//     <div>
//       <div>star</div>
//       <div>star</div>
//       <div>star</div>
//       <div>star</div>
//       <div>star</div>
//     </div>
//     // <>
//     //   <star />
//     //   <star />
//     //   <star />
//     //   <star />
//     //   <star />
//     // </>
//   );
// }

// function Star() {
//   console.log("Star rendering")
//   return
//   <div>star</div>
// }

// function Accordion() {
//   console.log("Accordion rendering")
//   return <div>
//     <h3>Меню</h3>
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>
//   </div>
// }

export default App;




