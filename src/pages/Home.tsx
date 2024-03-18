import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Story from '../components/Story';
import Events from '../components/Events';
import Credits from '../components/Credits';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col place-items-center w-full" id="skip">
        <Hero />
        <ContactForm />
        <Story />
        <Events />
        <Credits />
    </main>
  )
}

export default Home;
