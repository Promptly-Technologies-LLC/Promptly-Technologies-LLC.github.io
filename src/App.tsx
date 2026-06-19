// For anchor linking, see https://www.npmjs.com/package/react-router-hash-link
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx'
import Legal from './pages/Legal.tsx'
import Store from './pages/Store.tsx'
import './App.css'

const App: React.FC = () => {
  return (
    <>
    <Router basename='/'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Legal" element={<Legal />} />
          <Route path="/Store" element={<Store />} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
