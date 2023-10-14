import React from 'react';
import ComicPanel from './ComicPanel';
import './Credits.css';
import Footer from './Footer';

const Credits: React.FC = () => {
  return (
    <section id="credits" className="bg-gray-200">
    <div className="headercontainer pb-8 pt-8">
      <h1>Credits</h1>
    </div>
    <div className="creditcontainer">
        <div className="panelcontainer">
          <span>Christopher C. Smith</span>
          <ComicPanel 
            backgroundImage="images/team/Chris.png"
            altText = 'Portrait of Christopher C. Smith, President'
          />
          <span>President</span>
        </div>
        <div className="panelcontainer">
          <span>Baljinder Singh</span>
          <ComicPanel
            backgroundImage="images/team/Baljinder.png"
            altText='Portrait of Baljinder Singh, Partner'
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer">
          <span>Neil Carlson</span>
          <ComicPanel 
            backgroundImage="images/team/Neil.png"
            altText="Portrait of Neil Carlson, Partner"
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer">
          <span>Cliff Bentley</span>
          <ComicPanel 
            backgroundImage="images/team/Cliff.png"
            altText = 'Portrait of Cliff Bentley, Partner'
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer col-start-2 md:col-start-9">
          <span>MidJourney Bot</span>
          <ComicPanel 
            backgroundImage="images/team/MidJourneyBot.png"
            altText = 'Portrait of MidJourney Bot, Robot Intern'
          />
          <span>Robot Intern</span>
        </div>
    </div>
    <Footer />
    </section>
  );
};

export default Credits;
