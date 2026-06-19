import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Story from '../components/Story';
import Credits from '../components/Credits';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col place-items-center w-full" id="skip">
        <Hero />
        <ContactForm />
        <Story />
        <Credits />
    </main>
  )
}

export default Home;
