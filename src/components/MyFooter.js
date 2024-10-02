import React from 'react';
import './MyFooter.css';
import { Link } from 'react-router-dom';
import SocialMediaIcons from "./SocialMediaIcons.js";

function MyFooter() {
  return (
    <footer>
        <div className="footer-infos-left">
          <p>L'Atelier Tarpin Bois<br />06.98.83.77.31<br />Siren 919 281 527</p>
        </div>
        <div className="footer-infos-right">
          <div className="footer-infos-up">
            <SocialMediaIcons />
          </div>
          <div className="footer-infos-down">
            <Link to="/mentions-legales">Mentions légales</Link> <br/>
            <p>©2024 | Tous droits réservés</p>
          </div>
        </div>
    </footer>
  );
}

export default MyFooter;
