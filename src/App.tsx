import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

const App = () => (
  <Router>
      <Routes />
  </Router>
);

// const App = () => {
//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//           </svg>
//           <span className="ml-3 text-xl">Tailblocks</span>
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <a className="mr-5 hover:text-gray-900">First Link</a>
//           <a className="mr-5 hover:text-gray-900">Second Link</a>
//           <a className="mr-5 hover:text-gray-900">Third Link</a>
//           <a className="mr-5 hover:text-gray-900">Fourth Link</a>
//         </nav>
//         <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
//           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }

// const App = () => {
//   return (
//     <div className="App">
//       <h1 className='bg-lime-300 text-3xl font-bold underline'>Hello React Typescript</h1>
//       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum quidem, quibusdam ratione perferendis non eaque. Quis suscipit repellendus, deserunt eos inventore sequi quo eligendi eaque incidunt quas pariatur vel vero?
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
