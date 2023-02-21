import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
  // <div>Hello</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// let a = {
//   name : "Maksim",
//   age: 10,
//   address: {
//     city: "Minsk",
//     country: "Belarus"
//   }
// };

// let a = { 
//   name: "Maksoniy",
//   age: 10,
//   address: {
//     city: "Minsk",
//     country: "Belarus"
//   }
// };

// let b: Array<string | number>;
// b = [1,2,3,4,5];
// b = [];
// b = [2,4,6,7];
// b = [2,3, "hello", "yo"];
// b = [true, false];


// console.log(b);
