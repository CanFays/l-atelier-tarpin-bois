import React, { useState } from "react";
import './Card.css';
import Dots from "../assets/icons/DotSvgrepo.svg";
import IconProposal1 from '../assets/icons/IconProposal1.svg';
import IconProposal2 from '../assets/icons/IconProposal2.svg';
import IconProposal3 from '../assets/icons/IconProposal3.svg';

const Card = ({ title, shortDesc, longDesc, cardImage, parentClasses, isFlipped, onClick }) => {
  return (
    <div className={parentClasses} onClick={onClick}>
      <div
      className="d-flex flex-column justify-content-between align-items-center">
        <img src={cardImage} alt="Illustration des propositions (meuble, amménagement, etc) de l'atelier" className="card-svg"/>
        <div>
          {isFlipped ? longDesc : (
            <div>
              <h2 className="cardTitle">{title}</h2>
              <p>{shortDesc}</p>
            </div>
            )
          }
        </div>
        <div className="card-dot">
          <img src={Dots} alt="Appuyer pour plus d'infos !" />
        </div>
      </div>
    </div>
  );
};



const CardList = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cards = [
    { title: "Card 1",
      shortDesc: "Short desc 1",
      longDesc: "Long desc 1",
      cardImage: IconProposal1,
      parentClasses: "card col-10 col-sm-5 col-md-3 card-img-1" },
    { title: "Card 2",
      shortDesc: "Short desc 2",
      longDesc: "Long desc 2",
      cardImage: IconProposal2,
      parentClasses: "card col-10 col-sm-5 order-sm-3 col-md-3 order-md-2 card-img-2-3" },
    { title: "Card 3",
      shortDesc: "Short desc 3",
      longDesc: "Long desc 3",
      cardImage: IconProposal3,
      parentClasses: "card col-10 col-sm-5 order-sm-2 col-md-3 order-md-3 card-img-2-3" },
  ];

  const handleCardClick = (index) => {
    // Si la carte est déjà retournée, on la remet normale
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    // Flipper la carte cliquée et remettre les autres normales
    }
  };

  return (
    <div className="card-list row justify-content-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          shortDesc={card.shortDesc}
          longDesc={card.longDesc}
          cardImage={card.cardImage}
          parentClasses={card.parentClasses}
          isFlipped={flippedIndex === index} // Vérifie si la carte doit être flipped
          onClick={() => handleCardClick(index)} // Gère le clic pour retourner la carte
        />
      ))}
    </div>
  );
};



export default CardList;
