import React from 'react';
import Team from '../components/ui/Team';
import Careers from '../components/ui/Careers';
import './AboutUs.css';

const AboutUs: React.FC = () =>{
  return (
    <main id="skip">
      <Team/>
      <Careers />
    </main>
  )
}

export default AboutUs;
