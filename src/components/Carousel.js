import { useState } from 'react';
import './Carousel.css'

function openCarousel() {
}

function Carousel() {

  function closeCarousel() {
  }

  const comments = [
    { name: "Karine T.", comment: "Pas d'hésitation si vous êtes intéressés par le travail du bois. Benjamin vous fera utiliser de nombreuses machines de son atelier, vous apprendra différentes techniques et vous fera part de sa grande expérience (par exemple reboucher un défaut du bois avec du café 😁), dans une ambiance très sympa. Mon mari a été ravi de l'expérience" },
    { name: "Jean-Christophe R.", comment: "Très belle rencontre avec Benjamin et son atelier très bien équipé, 2 jours de grande qualité, humaine et technique, un vrai régal. Encore merci à toi Benjamin pour ton accueil, et de nous permettre de partager ta passion du bois et tes compétences." },
    { name: "Monique A.", comment: "4 copines réunies pour fabriquer des planches à découper en compagnie d'Igor ; Dès l'accueil Igor nous a mis à l'aise il nous a parlé de sa passion, de l'amour du bois qui lui avait fait changer de métier. Très pédagogue, il nous a montré toutes les étapes de la transformation d'un morceau de bois en une magnifique planche à découper. On a pu utiliser en toute sécurité les machines telles que scie à bandes ,défonceuse, ponceuse. Avec compétence, gentillesse et une pointe d'humour !" },
    { name: "Edouard G.", comment: "Super atelier ! Beaucoup de pédagogie dans les explications ! Les queues d'arronde en plus d'être très esthétiques sont très utiles pour assembler c'est un vrai plaisir de faire cet atelier 🙂 " }
  ]



  return (
    <div className='carousel'>
      <div className="prev">
        <img src="" alt="Commentaire précédent" />
      </div>
      <div className="content">
        OW the bioutifoule caroussel !!!
      </div>
      <div className="next">
        <img src="" alt="Commentaire suivant" />
      </div>
      <div className="close">
        <img src="" alt="Fermer les ommentaires" />
      </div>
    </div>
  );
}

export { Carousel, openCarousel };
export default Carousel;

// possible exporter une fonction openCarousel vers onClick de img, en dehors du component ? mettre hors function Craousel ? export default deux trucs ?
// trouver svg pour open close prev et next
// openCarousel et closeCarousel => d-none du component ?
// bah coder le carousel
