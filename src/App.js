import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import './App.css';

const App = () => {
  const clicked = () => {
    return alert("saya diklik");
  };

  const [text, setText] = useState('Nilai awal');
  return (
    <div className='App-header'>
      <h1>Timmer Stop Watch </h1>
      <Timer />
    </div>
  );
};

export default App;
