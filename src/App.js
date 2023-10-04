import React, { useState } from 'react';
import Timer from './components/Timer';
import './App.css';
import Api from './components/Api';

const App = () => {
  const clicked = () => {
    return alert("saya diklik");
  };

  const [text, setText] = useState('Nilai awal');
  return (
    <div className='App-header'>
      <h1>Timmer Stop Watch </h1>
      <Api />
      <Timer />
    </div>
  );
};

export default App;
