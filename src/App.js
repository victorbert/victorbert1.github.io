import React, { useState } from 'react';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';

const App = () => {
  const navText = "Wilbert";

  const clicked = () => {
    return alert("saya diklik");
  };

  const traceButton = () => {
    alert("mantap kali");
    console.log("button di click");
  };

  const [text, setText] = useState('Nilai awal');

  return (
    <div>
      <Navbar test={navText} />
      <h1>Hallo</h1>
      <p>hallo My Name is wilbert</p>
      <Introduction name="Wilbert" age="20" />
      <Introduction name="Helga" age="19" />
      <Introduction name="anton" age="10" />

      <button onClick={traceButton}>Ubah saya</button>
      <p>{text}</p>
      <button onClick={() => setText('Nilai baru')}>
        Perbarui Nilai
      </button>
    </div>
  );
};

export default App;
