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
            backgroundImage="images/team/Chris.jpg"
            altText = 'Portrait of Christopher C. Smith, President'
          />
          <span>President</span>
        </div>
        <div className="panelcontainer">
          <span>BJ Singh</span>
          <ComicPanel
            backgroundImage="images/team/Baljinder.jpg"
            altText='Portrait of BJ Singh, Partner'
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer">
          <span>Neil Carlson</span>
          <ComicPanel 
            backgroundImage="images/team/Neil.jpg"
            altText="Portrait of Neil Carlson, Partner"
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer">
          <span>Cliff Bentley</span>
          <ComicPanel 
            backgroundImage="images/team/Cliff.jpg"
            altText = 'Portrait of Cliff Bentley, Partner'
          />
          <span>Partner</span>
        </div>
        <div className="panelcontainer">
          <span>Jenny Xu</span>
          <ComicPanel 
            backgroundImage="images/team/Jenny.jpg"
            altText = 'Portrait of Jenny Xu, Intern'
          />
          <span>Intern</span>
        </div>
    </div>
    <Footer />
    </section>
  );
};

export default Credits;
