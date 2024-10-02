import React, { useRef } from 'react';
import './Contact.css'
import TitleLined from '../components/TitleLined';
import Map from '../components/Map'
// import emailjs from 'emailjs-com';

function Contact() {
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
        <h4>
        Vous avez une question, souhaitez réaliser un projet personnel, faire une demande de devis ?
        </h4>
        <p>
        Vous pouvez nous contacter au 06.09.09.09.09
        ou par mail : tarpinbois@cool.com
        </p>
      </section>
      <section className='form'>
        <p>
        Vous avez également la possibilité de nous envoyer un message directement :
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
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </section>
      <section className="atelier">
        <p>Vous êtes intéressé.e par un de nos <strong>ateliers</strong> ? <br /> La réservation se fait sur Wecandoo, c’est par
          <a href="https://wecandoo.fr/artisan/christophe-ebeniste-marseille#associated-workshops" target="_blank" rel="noreferrer"> ici !</a>
        </p>
      </section>
      <section className="map">
        <p>Et l’atelier, c’est par là !</p>
        <div className='d-flex justify-content-center'>
          <div className='map'>
            <Map />
          </div>
          <div className='adress'>
            <p>3 Bd Adrien Rousseau, <br />13011 Marseille <br /><br /> L'atelier est accessible en voiture, en train ou bus 80, arrêt St-Marcel.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
