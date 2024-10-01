import React from 'react';
import './Home.css';
import LogoFull from '../assets/icons/LogoFull.png'
import BtnTommette from '../components/BtnTommette';
import TitleLined from '../components/TitleLined';
import CardList from '../components/Card';
// import IconProposal1 from '../assets/icons/IconProposal1.svg';
// import IconProposal2 from '../assets/icons/IconProposal2.svg';
// import IconProposal3 from '../assets/icons/IconProposal3.svg';



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
      <TitleLined myTitle={"Tarpin bois qu’es aquò ?"} id={"only-it-without-top"} />
      <section className='home-presentation'>
        <p>Je suis Benjamin Paret, dit Igor : Ben c’est le boss, Igor celui qui bosse ! Passionné par le bois depuis toujours, j'ai longtemps pratiqué la menuiserie en autodidacte, avant de me lancer dans la belle aventure de l'ébénisterie.<br /><br />Soucieux et conscient des enjeux environnementaux et sociaux (ou humains) de notre époque, il me tient à coeur d’être à votre écoute, de privilégier les circuits courts, de proposer des bois français et de valoriser les  déchets de l’atelier.</p>
        <div className="d-flex justify-content-center">
          <BtnTommette lineOne={"Découvrez l'atelier et nos engagements"} linkTo={'/about'} />
        </div>
      </section>
      <TitleLined myTitle={"VOUS VOULEZ"} />
      <section className='home-research'>
      <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-8">
              <p>
              vous offrir du mobilier unique, durable, en bois massif <br />
              agencer votre appartement de manière optimale et personnalisée, sans trouver de solution auprès des grandes enseignes <br />
              découvrir quelques secrets de notre beau métier
              </p>
              <h6>Mon petit bois me dit que vous êtes au bon endroit !</h6>
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
      </section>





      {/* <TitleLined myTitle={"JE PROPOSE"} />
      <section className='home-proposal'>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="card col-10 col-sm-5 col-md-3 card-img-1">
              <Card
              cardImage={IconProposal1}
              title="Ma Carte1"
              shortDesc="Description courte"
              longDesc="Voici une longue description qui apparaîtra lorsque vous cliquerez sur le Dot."
              />
            </div>
            <div className="card col-10 col-sm-5 col-md-3 order-md-2 card-img-2-3">
              <Card
              cardImage={IconProposal2}
              title="Ma Carte2"
              shortDesc="Description courte"
              longDesc="Voici une longue description qui apparaîtra lorsque vous cliquerez sur le Dot."
              />
            </div>
            <div className=" card col-10 col-sm-6 order-sm-2 col-md-3 card-img-2-3">
              <Card
              cardImage={IconProposal3}
              title="Ma Carte3"
              shortDesc="Description courte"
              longDesc="Voici une longue description qui apparaîtra lorsque vous cliquerez sur le Dot."
              />
            </div>
          </div>
        </div>
      </section> */}
      <TitleLined myTitle={"Ils parlent de nous"} />
      <section className='home-links'>
      </section>
    </main>
  );
}

export default Home;
