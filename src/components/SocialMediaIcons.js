import React from 'react';
import './SocialMediaIcons.css';
import FbIcon from "../assets/icons/IconFbBlc.png";
import InstaIcon from "../assets/icons/IconInstaBlc.png";


const SocialMediaIcons = () => {

  return (
    <div>
      <a href="https://www.instagram.com/tarpin_bois" target='_blank' rel="noreferrer">
        <img src={InstaIcon} className="social-icon" alt="Page Instagram de L'Atelier Tarpin Bois" />
      </a>
      <a href="https://www.facebook.com/l.atelier.tarpin.bois" target='_blank' rel="noreferrer">
        <img src={FbIcon} className="social-icon" alt="Page Facebook de L'Atelier Tarpin Bois" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
