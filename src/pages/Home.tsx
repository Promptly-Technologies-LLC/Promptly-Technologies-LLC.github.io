import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Book from '../components/Bookings';
import Credits from '../components/Credits';

const Home: React.FC = () => {
  return (
    <main id="skip">
        <Hero />
        <Story />
        <Book />
        <Credits />
    </main>
  )
}

export default Home;
