import React from 'react';
import './App.css'; 
import Hero from './pages/Hero/hero';
import DetailedPage from './pages/detailedPage/detailedPage';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path='/hero' element={<Hero/>}/>
      <Route exact path='/hero/:id' element={<DetailedPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
