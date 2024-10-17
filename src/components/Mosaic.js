import React from 'react';
import './Mosaic.css';
import InstaCarousel from '../assets/icons/InstaCarousel.svg'

const Mosaic = () => {
 // toutes les images qui commencent par "mosaic" (png|jpe?g|webp)
  const images = require.context('../assets/images', false, /mosaic.*\.(webp)$/);
  // le chemin des images
  const imageList = images.keys().map(images);

  return (
    <div className="mosaic-component container">
      <div className="row d-flex justify-content-evenly">
        {imageList.map((image, index) => (
          <>
            <div className="mosaic-item col-5 col-sm-4 col-md-3">
              <img className="mosaic-img"
                  src={image}
                  alt={`Création ${index + 1} de Tarpin Bois`} />
              <img className="mosaic-icon" src={InstaCarousel} alt="Instagram carousel" />
            </div>
            {/* sauter la ligne après une certaine photo pour une taille d'écran : */}
            {(index === 4) && <div className="w-100 d-sm-block d-md-none"></div>}
          </>
        ))}
      </div>
    </div>
  );
}

export default Mosaic;
