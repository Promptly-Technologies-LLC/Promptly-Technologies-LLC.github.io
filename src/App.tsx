import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar.tsx'
import Footer from './components/ui/Footer.tsx'
import Home from './pages/Home.tsx'
import AboutUs from './pages/AboutUs.tsx'
import './global.css'

const App: React.FC = () => {
  return (
    <>
    <Navbar />
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
};

export default App;
