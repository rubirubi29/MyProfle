import React from 'react';
import '../styles/ProfilePicture.css';
import profileImage from '../assets/profile-aranas.jpg';

const ProfilePicture = () => {
  return (
    <div className="profile-picture">
      <img 
        src={profileImage} 
        alt="Rubilyn Aranas Profile Picture" 
      />
    </div>
  );
};

export default ProfilePicture; 