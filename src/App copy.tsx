import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Character from './components/Pages/Character';
import { Navigate, Route, Routes } from 'react-router-dom';
import Details from './components/Details/CharacterDetails';
import Episode from './components/Pages/Episode';

function App() {
  return (
    <>
      <div className="container-xl bg-sucess " data-bs-theme="dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/:page" element={<Character />} />

          <Route path="/episode" element={<Navigate to="/episode/1" />} />
          <Route path="/episode:page" element={<Episode />} />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/details" element={<Navigate to="/details/1" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
