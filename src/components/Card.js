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
        <div className="cardText">
          {isFlipped ? longDesc : (
            <div>
              <h2 className="cardTitle">{title}</h2>
              <p>{shortDesc}</p>
            </div>
            )
          }
        </div>
        <div className="card-dot d-flex justify-content-between">
          <div className="born-to-be-empty"></div>
          <img src={Dots} alt="Appuyer pour plus d'infos !" />
        </div>
      </div>
    </div>
  );
};



const CardList = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cards = [
    { title: "MEUBLES",
      shortDesc: "intérieur et extérieur",
      longDesc: "Conception de table, banquette, buffet, chevet, console, bar, comptoir, etc",
      cardImage: IconProposal1,
      parentClasses: "card interactiv-card col-10 col-sm-5 col-md-3 card-img-1" },
    { title: "AMÉNAGEMENTS",
      shortDesc: "sur mesure chez particuliers et professionnels",
      longDesc:  (<>Meuble TV, bibliothèque, dressing<br />-<br />Agencement de boutique, bureau, atelier, etc</>),
      cardImage: IconProposal2,
      parentClasses: "card interactiv-card col-10 col-sm-5 order-sm-3 col-md-4 order-md-2 card-img-2-3" },
    { title: "ATELIERS",
      shortDesc: "d'initiation et stages",
      longDesc: (<>Fabrication de
                <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/433c7cbc-746c-4f71-9512-b08d150e2ef0/book" target='blank'> planche à découper</a>,
                <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/40fa28c1-17b7-419d-b174-93f81b1f2bab/book" target='blank'> table basse</a>
                <br />-<br />Apprentissage d’
                <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/8db60f61-88e9-4a6b-823a-6557d3a27067/book" target='blank'>assemblages traditionnels</a></>),
      cardImage: IconProposal3,
      parentClasses: "card interactiv-card col-10 col-sm-5 order-sm-2 col-md-3 order-md-3 card-img-2-3" },
  ];

  const handleCardClick = (index) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
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
          isFlipped={flippedIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default CardList;
