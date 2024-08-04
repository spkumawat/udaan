import React from 'react';
import './ProfileCard.css'; // Ensure your styles are correctly imported

const ProfileCard = ({ name, photo, position, linkedin, instagram }) => {
  return (
    <div className="profile-card">
      <div className="profile-photo">
        <img src={photo} alt={`Photo of ${name}`} />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-position">{position}</p>
        <div className="profile-socials">
          {linkedin && (
            <a href={linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
             <i className="bi bi-linkedin"></i>
            </a>
          )}
          {instagram && (
            <a href={instagram} className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
