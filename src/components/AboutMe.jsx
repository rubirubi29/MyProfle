import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      
      <div className="info-table">
        <div className="info-row">
          <span className="label">Name:</span>
          <span className="value">Rubilyn Aranas</span>
        </div>
        <div className="info-row">
          <span className="label">Age:</span>
          <span className="value">21</span>
        </div>
        <div className="info-row">
          <span className="label">Address:</span>
          <span className="value">Purok Incociano, Poblacion, Cordova Cebu</span>
        </div>
      </div>
      
      <div className="bio">
        <p>
          Hi! I'm Rubilyn Aranas, 21 years old from Cordova, Cebu. I'm a BSIT student at Cordova Public College and also working at Bookchigo. I enjoy building websites and learning more about web development. When I'm not busy with school or work, I like spending time with loved ones or exploring new places.
        </p>
      </div>
    </div>
  );
};

export default AboutMe; 