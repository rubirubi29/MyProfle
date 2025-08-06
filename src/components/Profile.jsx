import React from 'react';
import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Button from './Button';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <main className="profile">
      <div className="profile-container">
        <div className="left-column">
          <ProfilePicture />
          <AboutMe />
        </div>
        <div className="right-column">
          <Skills />
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Profile; 