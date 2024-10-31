import './FormContact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function FormContact() {

  const form = useRef();
  const serviceID = "service_iu5uy7c";
  const templateID = "template_6ltmfh5";
  const publicKey = "Dw36i0bdWOpKwn1x7";
  // remettre publicKey = "Dw36i0bdWOpKwn1x7"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // faire une pop-up et suppr les contenus input
          alert('Message envoyé')
        },
        (error) => {
          console.log("ERREUR MAILJS...", error.text);
          alert("ÉCHEC DE L'ENVOI...", JSON.stringify(error))
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}
    className=''>
      <p>Vous avez également la possibilité de nous envoyer un message directement :</p>

      <div className="row">
        <div className="col-9 col-sm-5 col-md-4">
          <input type="text" name="from_name" id='from_name' placeholder='Nom' autoCapitalize='words'/>
        </div>
      </div>

      <div className="row">
        <div className="col-9 col-sm-5 col-md-4">
          <input type="tel" name="from_phone" id='from_phone' placeholder='Téléphone'/>
        </div>

        <div className="col-9 col-sm-8 col-md-7">
          <input type="email" name="from_email" id='from_email' placeholder='E-mail'/>
        </div>
      </div>

      <div className="row">
        <div className="col-11">
          <textarea name="message" id='message' placeholder='Message'/>
        </div>
      </div>



      <div className="d-flex">
        <input type="submit" value="Go !"
        className="btn-tommette " />
        <div id='mail-fail' className="d-none">Votre message n'a pas pu être envoyé ...</div>
        <div id='mail-success' className="d-none">Votre message a bien été envoyé. À bientôt !</div>
      </div>
    </form>
  );
};

export default FormContact;
