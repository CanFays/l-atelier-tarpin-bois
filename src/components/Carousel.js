import './Carousel.css';
import './Card.css';
import btnClose from '../assets/icons/CarouselClose.svg';
import btnPrev from '../assets/icons/CarouselPrev.svg';
import btnNext from '../assets/icons/CarouselNext.svg';
import { useState } from 'react';

const comments = [
  { id: 1, name: "Karine T.", comment: "Pas d'hésitation si vous êtes intéressés par le travail du bois. Benjamin vous fera utiliser de nombreuses machines de son atelier, vous apprendra différentes techniques et vous fera part de sa grande expérience (par exemple reboucher un défaut du bois avec du café 😁), dans une ambiance très sympa. Mon mari a été ravi de l'expérience" },
  { id: 2, name: "Jean-Christophe R.", comment: "Très belle rencontre avec Benjamin et son atelier très bien équipé, 2 jours de grande qualité, humaine et technique, un vrai régal. Encore merci à toi Benjamin pour ton accueil, et de nous permettre de partager ta passion du bois et tes compétences." },
  { id: 3, name: "Monique A.", comment: "4 copines réunies pour fabriquer des planches à découper en compagnie d'Igor ; Dès l'accueil Igor nous a mis à l'aise il nous a parlé de sa passion, de l'amour du bois qui lui avait fait changer de métier. Très pédagogue, il nous a montré toutes les étapes de la transformation d'un morceau de bois en une magnifique planche à découper. On a pu utiliser en toute sécurité les machines telles que scie à bandes ,défonceuse, ponceuse. Avec compétence, gentillesse et une pointe d'humour !" },
  { id: 4, name: "Edouard G.", comment: "Super atelier ! Beaucoup de pédagogie dans les explications ! Les queues d'arronde en plus d'être très esthétiques sont très utiles pour assembler c'est un vrai plaisir de faire cet atelier 🙂 " }
]

function openCarousel() {
  const carouselElement = document.querySelector('.carousel');
  carouselElement.classList.remove('d-none');
}

function Carousel() {

  const [currentId, setcurrentId] = useState(1);
  let currentComment = comments.find(item => item.id === currentId);

  function handlePrev() {
    setcurrentId(currentId === 1 ? comments.length : currentId - 1);
  }

  function handleNext() {
    setcurrentId(currentId === comments.length ? 1 : currentId + 1);
  }

  function closeCarousel() {
    const carouselElement = document.querySelector('.carousel');
    carouselElement.classList.add('d-none');
  }

  return (
    <div className='carousel d-none'>
      <div className="content card">
        <div className="content-name">{currentComment.name}</div>
        <div className="content-comment">{currentComment.comment}</div>
        <img src={btnPrev} className="carousel-btn--prev" onClick={handlePrev} alt="Commentaire précédent" />
        <img src={btnNext} className="carousel-btn--next" onClick={handleNext} alt="Commentaire suivant" />
        <img src={btnClose} className="carousel-btn--close" onClick={closeCarousel} alt="Fermer les commentaires" />
      </div>
    </div>
  );
}

export { Carousel, openCarousel };
export default Carousel;
