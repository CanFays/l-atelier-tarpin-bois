import React, { useState } from "react";
import './Card.css';
import Dots from "../assets/icons/DotSvgrepo.svg";

const Card = ({ title, shortDesc, longDesc, cardImage }) => {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
    className={`${flipped ? "flipped" : ""} d-flex flex-column justify-content-between align-items-center`}
    onClick={handleCardClick}>
      <img src={cardImage} alt="Illustration des propositions (meuble, amménagement, etc) de l'atelier" className="card-svg"/>
      <div>
        {flipped ? longDesc : (
          <div className="unflipped">
            <h2 className="cardTitle">{title}</h2>
            <p>{shortDesc}</p>
          </div>
          )
        }

      </div>


      <div className="card-dot d-flex flex-row-reverse">
        <img src={Dots} alt="Appuyer pour plus d'infos !" />
      </div>
    </div>
  );
};

export default Card;
