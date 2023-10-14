import React from 'react';
import ThreePanelRow from './ThreePanelRow';
import ThreePanelBlock from './ThreePanelBlock';
import FivePanelBlock from './FivePanelBlock';
import ComicPanel from './ComicPanel';

const Story: React.FC = () => {
  return (
    <section id="story">
      <div className="headercontainer">
        <h1 className="pt-12 pb-8">Our Story</h1>
      </div>
      <ThreePanelRow panels={[
        <ComicPanel
          text="Sometimes it seems like technology will eat the world." 
          backgroundImage="images/mechaboi.png"
          altText='Mechanical kaiju terrorizing a city'
          verticalPosition="bottom"
        />,
        <ComicPanel 
          text="Megafirms deploy unstoppable algorithms that extract, exploit, and dehumanize for shareholder acclaim." 
          backgroundImage="images/giantrobot.png"
          altText='Giant robot with a corporate logo on its chest'
          verticalPosition="center"
        />,
        <ComicPanel 
          text="We watch this race to the bottom unfold on our screens, feeling powerless to stop its course." 
          backgroundImage="images/phones.png"
          altText='Crowds of people looking at their phones'
          verticalPosition="top"
        />
      ]} widthClass='w-full'/>
      <ThreePanelBlock panels={[
        <ComicPanel 
          text="Enter OpenAI. They make AI available for pennies for anyone to use."
          backgroundImage="images/SamAltman.png"
          altText = 'OpenAI CEO Sam Altman hanging out with poor people'
          horizontalPosition="left"
          verticalPosition="top"
        />,
        <ComicPanel 
          text="Now we hurtle toward the future at speed. It's terrifying, but it also gives each of us the power to shape the world."
          backgroundImage="images/future.png"
          altText='A person falling into a wormhole'
          horizontalPosition="left"
          verticalPosition='top'
        />,
        <ComicPanel 
          text="Suddenly, plucky small businesses and pro-human non-profits can compete with corporations. Plug a little software into AI, and anyone automate like a megafirm; and the cost to build software is plummeting.<br/><br/>AI doesn't have to replace us. Instead, it can augment and empower us. It enables us to do more work, to finish more projects, to realize creative visions we never could before."
          backgroundImage="images/creativity.png"
          altText="A collage of abstract art"
          verticalPosition="center"
        />
      ]} widthClass="xl:w-3/4"/>
      <FivePanelBlock panels={[
        <ComicPanel 
          text="Or so I hope. I'm <a href='https://christophercarrollsmith.com/'>Christopher Smith</a>, and I founded Promptly to build AI-powered software for human thriving."
          backgroundImage="images/chris.png"
          altText="A cartoon of Christopher Smith with an intern and a dog"
          horizontalPosition="left"
          verticalPosition='bottom'
        />,
        <ComicPanel 
          text="We started with <a href='https://github.com/Promptly-Technologies-LLC/dir-diary'>dir-diary</a>, an open-source tool to help freeware developers document their code."
          backgroundImage="images/opensource.png"
          altText="Young open source developers working in a library"
          verticalPosition='bottom'
          horizontalPosition="right"
        />,
        <ComicPanel 
          text="We also put out a free educational newsletter on how to use AI tools, <a href='https://knowledgeworkersguide.substack.com/'>A Knowledge Worker's Guide to the Singularity</a>."
          backgroundImage="images/AIart.png"
          altText=""
          horizontalPosition="right"
          verticalPosition='top'
        />,
        <ComicPanel 
          text="And we're currently building Session Scribe, a hackathon-winning accessibility tool for the in-person classroom."
          backgroundImage="images/classroom.png"
          horizontalPosition="left"
          verticalPosition='top'
        />,
        <ComicPanel 
          text="We also build AI agents, web apps, and chatbots by commission for small businesses and nonprofits. Hire us today to help you green the earth, connect people, or empower creators through AI!"
          backgroundImage="images/greening.png"
          horizontalPosition="center"
          verticalPosition='bottom'
        />
      ]} widthClass='lg:w-3/4 xl:w-full'/>
    </section>
  );
};

export default Story;
