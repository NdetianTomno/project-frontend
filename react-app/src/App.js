/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import CarList from './components/CarList';
import NairobiList from './components/NairobiList';
import KisumuList from './components/KisumuList';
import MombasaList from './components/MombasaList';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationMenu />
      <Routes className="navlink">
        <Route path="/" element={<Home />} />
        <Route path="/car-list" element={<CarList />} className='carlist'/>
        <Route path="/nairobi-list" element={<NairobiList />} />
        <Route path="/kisumu-list" element={<KisumuList />} />
        <Route path="/mombasa-list" element={<MombasaList />} />
      </Routes>
    </Router>
  );
}

export default App;
