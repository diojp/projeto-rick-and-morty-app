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
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="container-xl bg-sucess min-vh-100" data-bs-theme="dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/character" />} />

          <Route path="/character" element={<Navigate to="/character/1" />} />
          <Route path="/character/:page" element={<Character />} />

          <Route path="/characterdetails" element={<Navigate to="/characterdetails/1" />} />
          <Route path="/characterdetails/:id" element={<CharacterDetails />} />

          <Route path="/episode" element={<Navigate to="/episode/1" />} />
          <Route path="/episode/:page" element={<Episode />} />

          <Route path="/episodedetails" element={<Navigate to="/episodedetails/1" />} />
          <Route path="/episodedetails/:id" element={<EpisodeDetails />} />

          <Route path="/location" element={<Navigate to="/location/1" />} />
          <Route path="/location/:page" element={<Location />} />

          <Route path="/locationdetails/:id" element={<LocationDetails />} />
          <Route path="/locationdetails" element={<Navigate to="/locationdetails/1" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
