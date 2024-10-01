import React, { useState } from "react";
import './Card.css';
import Dots from "../assets/icons/DotSvgrepo.svg";

const Card = ({ title, shortDesc, longDesc, cardImage }) => {
  const [flipped, setFlipped] = useState(false);

  // Fonction pour gérer le clic sur le dot
  const handleDotClick = () => {
    setFlipped(!flipped); // Inverser l'état flipped à chaque clic
  };

  return (
    <div className={`${flipped ? "flipped" : ""} d-flex flex-column justify-content-between align-items-center`}>
      <img src={cardImage} alt="Illustration des propositions (meuble, amménagement, etc) de l'atelier" className="card-svg"/>
      <h2>{title}</h2>
      <p>{flipped ? longDesc : shortDesc}</p>
      <div className="card-dot" onClick={handleDotClick}>
        <img src={Dots} alt="Appuyer pour plus d'infos !" />
      </div>
    </div>
  );
};

export default Card;
