import React from 'react';

import '../styles/Project.css';

const Project = ({ title, description, background }) => {
  return (
    <div className='project-main' style={{
       backgroundImage: `url(${background})`,
       backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'

       }}>
      <div className="project-content">
        <h1 className='title'>{title}</h1>
      </div>
    </div>
  )
};

export default Project;
