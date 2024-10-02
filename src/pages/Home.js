import React from 'react';
import './Home.css';
import BtnTommette from '../components/BtnTommette';
import TitleLined from '../components/TitleLined';
import CardList from '../components/Card';
import LogoTarpin from '../components/LogoTarpin';

function Home() {
  return (
    <main className="container home">
      <LogoTarpin />
      <TitleLined myTitle={"Tarpin bois qu’es aquò ?"} id={"only-it-without-top"} />
      <section className='home-presentation'>
        <p>Je suis <strong>Benjamin Paret</strong> , dit Igor : Ben c’est le boss, Igor celui qui bosse ! Passionné par le bois depuis toujours, j'ai longtemps pratiqué la menuiserie en autodidacte, avant de me lancer dans la belle aventure de l'<strong>ébénisterie</strong>.<br /><br />Soucieux et conscient des enjeux environnementaux et sociaux (ou humains) de notre époque, il me tient à coeur d’être <strong>à votre écoute</strong>, de privilégier les <strong>circuits courts</strong>, de proposer des <strong>bois français</strong> et de <strong>valoriser les  déchets</strong> de l’atelier.</p>
        <div className="d-flex justify-content-center">
          <BtnTommette lineOne={"Découvrez l'atelier et nos engagements"} linkTo={'/about'} />
        </div>
      </section>
      <TitleLined myTitle={"VOUS VOULEZ"} />
      <section className='home-research'>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-8">
              <ul className='text-start'>
                <li>vous offrir du <strong>mobilier unique</strong>, durable, en bois massif</li>
                <li>agencer votre appartement de manière <strong>optimale</strong> et <strong>personnalisée</strong>, sans trouver de solution auprès des grandes enseignes</li>
                <li>découvrir quelques <strong>secrets</strong> de notre beau métier</li>
              </ul>
              <h6><strong>Mon petit bois me dit que vous êtes au bon endroit !</strong></h6>
            </div>
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-7 col-sm-4 col-md-12">
                  <BtnTommette lineOne={"DEMANDEZ"}  lineTwo={"un devis"} linkTo={'/contact'} />
                </div>
                <div className="col-7 col-sm-4 col-md-12">
                  <a href="https://wecandoo.fr/artisan/christophe-ebeniste-marseille#associated-workshops" target='_blank' rel="noreferrer">
                    <BtnTommette lineOne={"RESERVEZ "} lineTwo={"un atelier"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TitleLined myTitle={"JE PROPOSE"} />
      <section className='home-proposal'>
        <div className="container text-center">
          <div className="row justify-content-center">
            <CardList />
          </div>
        </div>
        <div className="mosaic text-center">

          <a href="https://www.instagram.com/latelier_tarpin_bois/" target='_blank' rel="noreferrer">
            <BtnTommette lineOne={"Suivez-nous sur Instagram !"} addIcon={true}/>
          </a>
        </div>
      </section>
      <TitleLined myTitle={"Ils parlent de nous"} />
      <section className='home-links'>
      </section>
    </main>
  );
}

export default Home;
