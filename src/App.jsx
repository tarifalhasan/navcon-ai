import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Arbeiten from './pages/Arbeiten';
import { ArbeitenDetails } from './components';
import Kontakt from './pages/Kontakt';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arbeiten" element={<Arbeiten />} />
        <Route path="arbeiten/:arbeitenId" element={<ArbeitenDetails />} />
        <Route path="kontakt" element={<Kontakt />} />
      </Routes>
    </>
  );
};

export default App;
