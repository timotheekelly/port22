import React from 'react';
import Project from '../components/Project';

import '../styles/Work.css';
import aiImage from '/ai.jpg';
import blockImg from '/block.jpg';
import pinImg from '/pin.jpg';
import cryptoImg from '/crypto.jpg';
import ramenImg from '/ramen.jpg';
import retroImg from '/retro.jpg';

const Work = () => {
  return (
  <div className='work-main'>

    <div className="projects">
      <Project title='Pinesque' background={pinImg} className='project'/>
      <Project title='Web 3.0' background={blockImg} className='project'/>
      <Project title='Neural Net' background={aiImage} className='project'/>
      <Project title='Retro' background={retroImg} className='project'/>
      <Project title='Ramen Shop' background={ramenImg} className='project'/>
      <Project title='CryptoNews' background={cryptoImg} className='project'/>
      
    </div>
  </div>
  );
};

export default Work;
