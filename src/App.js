import React from 'react';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="bg-blue-500 py-30 min-h-screen">
      <header className="w-10/12 mx-auto">
        <img src={logo} className="w-32 h-auto mb-5 block mx-auto" alt="logo" />
        <p className="text-center text-2xl text-white">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
