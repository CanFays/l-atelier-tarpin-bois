import './Contact.css'
import '../components/BtnTommette.css'
import TitleLined from '../components/TitleLined';
import Map from '../components/Map'
import FormContact from '../components/FormContact.js'


function Contact() {

  const Tel = "06.98.83.77.31"
  const Mail = "tarpinbois@gmail.com"
  const Address = (
    <>
      3 Bd Adrien Rousseau, <br />
      13011 Marseille
    </>
  );

  return (
    <div className="container contact">
      <TitleLined myTitle={"CONTACTER TARPIN BOIS"} id={"padding-to-be-see"} />
      <section className='text'>
        <p>Vous avez une question, souhaitez faire réaliser un projet personnel, demander un devis ?<br />
        Vous pouvez nous contacter au <strong>{Tel}</strong> ou par mail : <strong>{Mail}</strong>.
        </p>
        <FormContact />
      </section>
      <TitleLined myTitle={"ATELIERS ET STAGES"} id="atelier" />
      <section className="atelier">
        <p>Vous êtes intéressé.e par un de nos <strong>ateliers</strong>? <br /> À faire ou à offrir, c'est une activité originale pour découvrir le travail du bois ou se perfectionner ! <br /> La réservation se fait sur Wecandoo.fr :
          <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/40fa28c1-17b7-419d-b174-93f81b1f2bab/book" target='blank'>  Table basse  </a> |
          <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/433c7cbc-746c-4f71-9512-b08d150e2ef0/book" target='blank'>  Planche à découper </a> |
          <a href="https://booking.wecandoo.com/artisans/50cf2001-fea5-4c31-be8c-7b58aa7d7403/workshops/8db60f61-88e9-4a6b-823a-6557d3a27067/book" target='blank'>  Assemblages traditionnels</a>
        </p>
        <p>Vous recherchez un <strong>stage</strong> conventionné ? <br />Contactez-nous directement ! <br />Nous ne sommes malheureusement pas en mesure d'accepter d'alternants pour le moment.
        </p>
      </section>
      <TitleLined myTitle={"VENIR À L'ATELIER"} />
      <section className="map">
        <div className="container text-start">
          <div className="row justify-content-evenly">
            <div className="order-2 col-10 order-sm-1 col-sm-6 col-xl-5">
              <Map />
            </div>
            <div className="order-1 col-10 order-sm-2 col-sm-6 col-xl-6">
              <p>C’est par là !</p>
              <p>{Address}<br /><br /> L'atelier est accessible en voiture, en train (gare St-Marcel) ou bus 50.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
