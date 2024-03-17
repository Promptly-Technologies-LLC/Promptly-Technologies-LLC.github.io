import React from 'react';
import ThreePanelBlock from './ThreePanelBlock';
import ThreePanelRow from './ThreePanelRow';
import ComicPanel from './ComicPanel';
import Feature from './Feature';

const Story: React.FC = () => {
  return (
    <section className="relative flex flex-col w-full items-center" id="story">
      <div className="headercontainer">
        <h1 className="pt-12 pb-8">Our Story</h1>
      </div>
      <ThreePanelBlock panels={[
        <ComicPanel 
          text="In 2022, OpenAI released ChatGPT, making powerful AI available for pennies for anyone to use."
          backgroundImage="images/SamAltman.jpg"
          altText = 'OpenAI CEO Sam Altman hanging out with poor people'
          horizontalPosition="left"
          verticalPosition="top"
        />,
        <ComicPanel 
          text="Now we hurtle toward the future at speed. It's terrifying, but it also gives each of us the power to shape the world."
          backgroundImage="images/future.jpg"
          altText='A person falling into a wormhole'
          horizontalPosition="left"
          verticalPosition='top'
        />,
        <ComicPanel 
          text="Or so I hope. I'm <a href='https://christophercarrollsmith.com/'>Christopher Smith</a>, and I founded Promptly to build AI-powered software for small businesses and nonprofits."
          backgroundImage="images/chris.jpg"
          altText="A cartoon of Christopher Smith with an intern and a dog"
          horizontalPosition="left"
          verticalPosition="bottom"
        />
      ]} widthClass='xl:w-3/4'/>
      <Feature />
      <ThreePanelRow panels={[
        <ComicPanel 
          text="We recently launched <a href='https://scribert.com'>Scribert</a>, a subscription audio transcription app."
          backgroundImage="images/podcaster.jpg"
          altText="Young Asian woman records a podcast in a studio"
          verticalPosition="top"
          horizontalPosition="left"
        />,
        <ComicPanel 
          text="We also publish a free newsletter on how to use AI tools, <a href='https://knowledgeworkersguide.substack.com/'>A Knowledge Worker's Guide to the Singularity</a>."
          backgroundImage="images/AIart.jpg"
          altText="An artist uses a futuristic paintbrush stylus on a digital device"
          horizontalPosition="right"
          verticalPosition="top"
        />,
        <ComicPanel 
          text="And we offer corporate trainings and educational seminars on AI workflows online and in person in the Albany, NY Capital Region."
          backgroundImage="images/classroom.jpg"
          altText="A futuristic classroom with a teacher and students"
          verticalPosition="top"
        />
      ]} widthClass='xl:w-3/4'/>
    </section>
  );
};

export default Story;
