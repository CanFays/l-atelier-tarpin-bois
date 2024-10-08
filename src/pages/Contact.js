import React, { useRef } from 'react';
import './Contact.css'
import '../components/BtnTommette.css'
import TitleLined from '../components/TitleLined';
import Map from '../components/Map'
// import emailjs from 'emailjs-com';

function Contact() {
  const Tel = "06.98.83.77.31"
  const Mail = "tarpinbois@gmail.com"
  const Address = (
    <>
      3 Bd Adrien Rousseau, <br />
      13011 Marseille
    </>
  );
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     'YOUR_SERVICE_ID',
  //     'YOUR_TEMPLATE_ID',
  //     form.current,
  //     'YOUR_USER_ID'
  //   ).then((result) => {
  //     console.log(result.text);
  //   }, (error) => {
  //     console.log(error.text);
  //   });
  //   e.target.reset();  // Réinitialiser le formulaire après envoi
  // };

  return (
    <div className="container contact">
      <TitleLined myTitle={"Contacter l'Atelier Tarpin Bois"} id={"padding-to-be-see"} />
      <section className='text'>
        <h4>Vous avez une question, souhaitez faire réaliser un projet personnel, demander un devis ?
        </h4>
        <br />
        <p>Vous pouvez nous contacter au {Tel} ou par mail : {Mail}.</p>
      </section>
      <section className='form'>
        <p>Vous avez également la possibilité de nous envoyer un message directement :
        </p>
      {/* <form ref={form} onSubmit={sendEmail}> */}
        <form ref={form} onSubmit={'sendEmail à faire'}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom</label>
            <input type="text" className="form-control" id="name" name="user_name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="user_email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" name="message" required></textarea>
          </div>
          <button type="submit" className="btn btn-tommette">Envoyer</button>
        </form>
      </section>
      <TitleLined myTitle={"Ateliers et stages"} />
      <section className="atelier">
        <p>Vous êtes intéressé.e par un de nos <strong>ateliers</strong> ? <br /> La réservation se fait sur Wecandoo, c’est par
          <a href="https://wecandoo.fr/artisan/christophe-ebeniste-marseille#associated-workshops" target="_blank" rel="noreferrer"><em> ici  </em></a>
        ! </p>
        <p>Vous recherchez un <strong>stage</strong> conventionné ? <br />Contactez-nous directement ! <br />Nous ne sommes malheureusement pas en mesure d'accepter d'alternants pour le moment.
        </p>
      </section>
      <TitleLined myTitle={"Venir à l'atelier"} />
      <section className="map">
      <div class="container text-start">
        <div class="row justify-content-evenly">
          <div class="order-2 col-10 order-sm-1 col-sm-6 col-xl-5">
            <Map />
          </div>
          <div class="order-1 col-10 order-sm-2 col-sm-6 col-xl-6">
            <p>C’est par là !</p>
            <p>{Address}<br /><br /> L'atelier est accessible en voiture, en train (gare St-Marcel) ou bus 50.</p>
          </div>
        </div>
      </div>




        {/* <div className='d-flex justify-content-center'>
          <div className='map'>
          </div>
          <div className='adress'>
          </div>
        </div> */}

      </section>
    </div>
  );
}

export default Contact;
