import './Carousel.css'
import { useState } from 'react';



const comments = [
  { id: 1, name: "Karine T.", comment: "Pas d'hésitation si vous êtes intéressés par le travail du bois. Benjamin vous fera utiliser de nombreuses machines de son atelier, vous apprendra différentes techniques et vous fera part de sa grande expérience (par exemple reboucher un défaut du bois avec du café 😁), dans une ambiance très sympa. Mon mari a été ravi de l'expérience" },
  { id: 2, name: "Jean-Christophe R.", comment: "Très belle rencontre avec Benjamin et son atelier très bien équipé, 2 jours de grande qualité, humaine et technique, un vrai régal. Encore merci à toi Benjamin pour ton accueil, et de nous permettre de partager ta passion du bois et tes compétences." },
  { id: 3, name: "Monique A.", comment: "4 copines réunies pour fabriquer des planches à découper en compagnie d'Igor ; Dès l'accueil Igor nous a mis à l'aise il nous a parlé de sa passion, de l'amour du bois qui lui avait fait changer de métier. Très pédagogue, il nous a montré toutes les étapes de la transformation d'un morceau de bois en une magnifique planche à découper. On a pu utiliser en toute sécurité les machines telles que scie à bandes ,défonceuse, ponceuse. Avec compétence, gentillesse et une pointe d'humour !" },
  { id: 4, name: "Edouard G.", comment: "Super atelier ! Beaucoup de pédagogie dans les explications ! Les queues d'arronde en plus d'être très esthétiques sont très utiles pour assembler c'est un vrai plaisir de faire cet atelier 🙂 " }
]

function openCarousel() {
  console.log("dans open");

}

function Carousel() {

  const [currentId, setcurrentId] = useState(1);
  console.log("entrée Carousel; id=", currentId, typeof currentId);
  let currentComment = comments.find(item => item.id === currentId);
  console.log("entrée Carousel; currentComment :", currentComment);

  function handlePrev() {
    setcurrentId(currentId === 1 ? comments.length : currentId - 1);
    console.log("dans prev, id:", currentId);
  }

  function handleNext() {
    setcurrentId(currentId === comments.length ? 1 : currentId + 1);
    console.log("dans next, id:", currentId);
  }

  function closeCarousel() {
    console.log("dans close");
  }


  return (
    <div className='carousel'>
      <div className="btn-prev" onClick={handlePrev}>
        <img src="" alt="Commentaire précédent" />
      </div>
      <div className="content">
        <div className="content-name"></div>
        <div className="content-comment"></div>
        {currentComment.name}
        {currentComment.comment}


      </div>
      <div className="btn-next" onClick={handleNext}>
        <img src="" alt="Commentaire suivant" />
      </div>
      <div className="btn-close" onClick={closeCarousel}>
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
