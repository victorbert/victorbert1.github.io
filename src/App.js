import React from 'react';
import Timer from './components/Timer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import FetchData from './components/FetchData';
import FullNewsPage from './components/FullNewsPage'; 

const App = () => {
  return (
    <div className='App-header'>
      <h1 className='h1-h'>News.id </h1>
      <input className='input-p' type='text' placeholder='Telusuri Topik'></input>
      <FetchData />
      <FullNewsPage />
      <Timer />

      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="/news/:id" element={<FullNewsPage />} />
      </Routes>

    </div>
  );
};

export default App;
