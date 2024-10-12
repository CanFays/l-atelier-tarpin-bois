import React from 'react';
import './Mosaic.css';
import InstaCarousel from '../assets/icons/InstaCarousel.svg'

const Mosaic = () => {
 // Importer toutes les images du dossier "assets/images" qui commencent par "mosaic"
  const images = require.context('../assets/images', false, /mosaic.*\.(png|jpe?g|webp)$/);

  // Obtenir le chemin des images
  const imageList = images.keys().map(images);

  return (
    <div className="mosaic-component container">
      <div className="row d-flex justify-content-evenly">
        {imageList.map((image, index) => (
          <div className="mosaic-item col-5 col-sm-4 col-md-3">
            <img key={index}
            className="mosaic-img"
            src={image}
            alt={`Création ${index + 1} de Tarpin Bois`} />
            <img class="mosaic-icon" src={InstaCarousel} alt="Instagram carousel" />
          </div>
        ))}
      </div>
    </div>
  );
}



export default Mosaic;
