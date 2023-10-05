import React, { useState } from 'react';
import Timer from './components/Timer';
import './App.css';
import Api from './components/Api';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchData from './components/Api';
import NewsDetail from './components/Api1';


const App = () => {
  const clicked = () => {
    return alert("saya diklik");
  };

  const [text, setText] = useState('Nilai awal');
  return (
    <div className='App-header'>
      <Navbar />
      <h1 className='h1-h'>News.id </h1>
      <input className='input-p' type='text' placeholder='Telusuri Topik'></input>
      <Api />
      <Timer />
      <Router>
      <Routes>
        <Route exact path="/" component={FetchData} />
        <Route path="/news/:id" component={NewsDetail} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
