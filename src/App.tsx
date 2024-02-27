import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { Navigate, Route, Routes } from 'react-router-dom';
import Details from './components/Details/Details';

function App() {
  return (
    <>
      <div className="container-xl bg-sucess " data-bs-theme="dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/:page" element={<Hero />} />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/details" element={<Navigate to="/details/1" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
