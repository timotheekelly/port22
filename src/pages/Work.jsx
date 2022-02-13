import React from 'react';
import Project from '../components/Project';

import '../styles/Work.css';
import aiImage from '../img/ai.jpg';
import pinImg from '../img/pin.jpg';
import cryptoImg from '../img/crypto.jpg';
import ramenImg from '../img/ramen.jpg';
import retroImg from '../img/retro.jpg';

const Work = () => {
  return (
  <div className='work-main'>

    <div className="projects">
      <Project title='Pinesque' background={pinImg} className='project'/>
      <Project title='Web 3.0' background={process.env.PUBLIC_URL + "/block.jpg'"} className='project'/>
      <Project title='Neural Net' background={aiImage} className='project'/>
      <Project title='Retro' background={retroImg} className='project'/>
      <Project title='Ramen Shop' background={ramenImg} className='project'/>
      <Project title='CryptoNews' background={cryptoImg} className='project'/>
      
    </div>
  </div>
  );
};

export default Work;
