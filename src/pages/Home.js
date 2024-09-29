import React from 'react';
import './Home.css';
import LogoFull from '../assets/icons/LogoFull.png'

function Home() {
  return (
    <main className="container home">
      <section className='home-logo'>
        <div>
          <img src={LogoFull} alt="Logo de l'atelier Tarpin Bois" />
        </div>
        <div>
          <h2>Artisan ébéniste</h2>
          <p>Créateur d'idées en bois</p>
        </div>
      </section>

      <section className='home-presentation'>
        {/* grid sections !!! */}
      </section>

      <section className='home-research'>
      </section>

      <section className='home-proposal'>
      </section>

      <section className='home-links'>
      </section>
    </main>
  );
}

export default Home;
