import './FormContact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function FormContact() {

  const form = useRef();
  const serviceID = "service_iu5uy7c";
  const templateID = "template_6ltmfh5";
  const publicKey = "bloup";
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
          alert('Message envoyé')
        },
        (error) => {
          console.log("ERREUR MAILJS...", error.text);
          alert("ÉCHEC DE L'ENVOI...", JSON.stringify(error))
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='row'>
      <p>Vous avez également la possibilité de nous envoyer un message directement :</p>
      <input type="text" name="from_name" id='from_name' placeholder='Nom' autoCapitalize='words' className='col-6 ' />
      <input type="tel" name="from_phone" id='from_phone' placeholder='Téléphone' className='col-3 ' />
      <input type="email" name="from_email" id='from_email' placeholder='Email' className='col-5 ' />
      <textarea name="message" id='message' placeholder='Message' className='col-8 ' />
      <input type="submit" value="Go !" className="btn-tommette col-2" />
      <div id='mail-fail' className="d-none">Votre message n'a pas pu être envoyé ...</div>
      <div id='mail-success' className="d-none">Votre message a été envoyé. À bientôt !</div>
    </form>
  );
};

export default FormContact;
