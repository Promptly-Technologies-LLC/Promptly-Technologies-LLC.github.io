import React from 'react';
import './Home.css';
import Pitch from '../components/ui/Pitch';
import Services from '../components/ui/Services';
import Book from '../components/ui/Book';

const Home: React.FC = () => {
  return (
    <>
        <Pitch />
        <Services />
        <Book />
    </>
  )
}

export default Home;
