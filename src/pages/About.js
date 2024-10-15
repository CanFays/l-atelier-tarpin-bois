import React from 'react';
import './About.css';
import TitleLined from '../components/TitleLined';
import Igor from '../assets/images/Igor-from-Amandine.webp'

function About() {
  return (
    <div className='container about'>
      <TitleLined myTitle={"Tarpin bois qu’es aquò ?"} id={"padding-to-be-see"} />
      <section className='about-presentation'>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-11 order-md-2 col-md-5 mb-4">
              <figure>
                <img src={Igor} alt="Portrait de Benjamin Paret" className='img-presentation'/>
                <figcaption className='credits'><i>© crédit photo : amandine-marvin.fr</i></figcaption>
              </figure>
            </div>
            <div className="col-11 order-md-1 col-md-6">
              <p>Je suis <strong>Benjamin Paret</strong> , dit Igor : Ben c’est le boss, Igor celui qui bosse ! Passionné par le bois depuis toujours, j'ai longtemps pratiqué la menuiserie en autodidacte, avant de me lancer dans la belle aventure de l'<strong>ébénisterie</strong>. <br /><br />À la suite de ma formation professionnelle, j'ai créé "L'Atelier Tarpin Bois", encouragé et soutenu par mon mentor <strong>Christophe Claeys</strong>. Une belle rencontre humaine, qui a permis à L'ATB de trouver sa place dans un atelier partagé, à deux pas de la gare Saint-Marcel.
              Installés dans les locaux de l'association <strong>Les Copeaux Marseillais</strong>, nous portons des valeurs d'écoute et de partage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TitleLined myTitle={"Nos engagements"} />
      <section className='commitment nicer-dots'>
        <p>Soucieux et conscient des enjeux environnementaux et sociaux (ou humains) de notre époque, il nous tient à coeur de :</p>
        <ul>
          <li><span className='title-commitment'>privilégier les circuits courts</span>  :<br />
la plupart de nos fournisseurs se situent à moins de 30km de notre atelier</li>
          <li><span className='title-commitment'>proposer des bois français</span>  :<br />chêne, frêne, châtaignier, érable, noyer ... </li>
          <li><span className='title-commitment'>être à votre écoute</span>  :<br />pour réaliser des créations uniques et sur mesure, en prenant en compte tous vos besoins ou envies les plus folles</li>
          <li><span className='title-commitment'>valoriser nos déchets</span>  :<br />en créant du lien avec les acteurs de notre secteur : centres équestres et agriculteurs en permaculture pour les copeaux de bois ; distribution de chutes de bois massif pour les personnes ayant une cheminée ou un barbecue (faut pas oublier qu'on est dans le Sud !)</li>
        </ul>
      </section>
      <TitleLined myTitle={"Equipe et collaborateurs"} />
      <section className='team'>
        <p>Afin de garantir un travail unique, éthique et de qualité, nous travaillons en étroite collaboration avec différents <strong>artisans locaux</strong> (ébénistes, tourneurs, ferronniers, tapissiers d'ameublement, laqueurs).</p>
        <p><br />Notre bureau d'étude pourra vous proposer des <strong>visuels 3D</strong> réalistes afin de vous immerger pleinement dans vos projets: <br /> "<strong>N++ architecte</strong>" se fera un plaisir de designer agencement et mobilier.</p>
      </section>
    </div>
  );
}

export default About;
