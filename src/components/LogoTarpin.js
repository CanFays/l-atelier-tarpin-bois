import React from 'react';
import './LogoTarpin.css';
import LogoFull from '../assets/icons/LogoFull.png'

const LogoTarpin = () => {
  return (
  <section className='logo-tarpin'>
    <div>
      <img src={LogoFull} alt="Logo de l'atelier Tarpin Bois" />
    </div>
    <div>
      <h2>Artisan ébéniste</h2>
      <p>Créateur d'idées en bois</p>
    </div>
  </section>
  );
}

export default LogoTarpin;
