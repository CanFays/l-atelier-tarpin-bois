import React from 'react';
import './About.css';
import TitleLined from '../components/TitleLined';
import Igor from '../assets/images/Igor-from-Amandine.webp'

function About() {
  return (
    <div className='container about'>
      <TitleLined myTitle={"Tarpin bois qu’es aquò ?"} id={"padding-to-be-see"} />
      <section className='about-presentation'>
        <div class="container text-center">
          <div class="row">
            <div class="col-11 order-sm-2 col-sm-5">
              <img src={Igor} alt="Benjamin Paret" className='img-presentation'/>
            </div>
            <div class="col-11 order-sm-1 col-sm-5">
              <p>Je suis <strong>Benjamin Paret</strong> , dit Igor : Ben c’est le boss, Igor celui qui bosse ! Passionné par le bois depuis toujours, j'ai longtemps pratiqué la menuiserie en autodidacte, avant de me lancer dans la belle aventure de l'<strong>ébénisterie</strong>. <br /><br />À la suite de ma formation professionnelle, j'ai créé "L'Atelier Tarpin Bois", encouragé et soutenu par mon mentor <strong>Christophe Claeys</strong>. Une belle rencontre humaine, qui a permis à L'ATB de trouver sa place dans un atelier partagé, à deux pas de la gare Saint-Marcel.
              Installés dans les locaux de l'association <strong>« Les Copeaux Marseillais »</strong>, nous portons des valeurs d'écoute et de partage.
              </p>
            </div>
            {/* <div class="col-10 order-3 col-sm-11">
              <p></p>
            </div> */}
          </div>
        </div>
      </section>






      <TitleLined myTitle={"Nos engagements"} />
      <section className='commitment'>

      </section>
      <TitleLined myTitle={"Equipe et collaborateurs"} />
      <section className='team'>

      </section>


      <br /><br />Soucieux et conscient des enjeux environnementaux et sociaux (ou humains) de notre époque, il me tient à coeur d’être <strong>à votre écoute</strong>, de privilégier les <strong>circuits courts</strong>, de proposer des <strong>bois français</strong> et de <strong>valoriser les  déchets</strong> de l’atelier.
    </div>
  );
}

export default About;
