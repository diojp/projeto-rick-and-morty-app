import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Character from './components/Pages/Character';
import Episode from './components/Pages/Episode';
import Location from './components/Pages/Location';
import { Navigate, Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/Details/CharacterDetails';
import EpisodeDetails from './components/Details/EpisodeDetails';
import LocationDetails from './components/Details/LocationDetails';


function App() {
  return (
    <>
      <div className="container-xl bg-sucess " data-bs-theme="dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />
          <Route path="/:page" element={<Character />} />          

          <Route path="/characterdetails/:id" element={<CharacterDetails />} />
          <Route path="/characterdetails" element={<Navigate to="/characterdetails/1" />} />

          <Route path="/episode/:id" element={<Episode />} />
          <Route path="/episode" element={<Navigate to="/episode/1" />} />

          <Route path="/episodedetails/:id" element={<EpisodeDetails />} />
          <Route path="/episodedetails" element={<Navigate to="/episodedetails/1" />} />

          <Route path="/location/:id" element={<Location />} />
          <Route path="/location" element={<Navigate to="/location/1" />} />

          <Route path="/locationdetails/:id" element={<LocationDetails />} />
          <Route path="/locationdetails" element={<Navigate to="/locationdetails/1" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
