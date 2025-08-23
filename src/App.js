
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main   from './components/Main';
import Gk     from './components/Gk';
import Sports from './components/Sports';
import History from './components/History';
import Animals from './components/Animals';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/"          element={<Main />}    />
        <Route path="/gk"        element={<Gk />}      />
        <Route path="/sports"    element={<Sports />}  />
        <Route path="/history"  element={<History />} />
        <Route path="/animals"  element={<Animals />} />
        <Route path="/aboutus"  element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;