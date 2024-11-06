import './FormContact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function FormContact() {

  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = "bloup";
  // remettre publicKey = "process.env.REACT_APP_PUBLIC_KEY"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          // faire une pop-up ?
          alert('Message envoyé, nous vous recontactons très bientôt !')
          document.contactForm.reset();
        },
        (error) => {
          alert(`Le message n'a pas pu être envoyé, veuillez réessayer ...                 ${JSON.stringify(error)}`)
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} name='contactForm'>
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
        {/* <div id='mail-fail' className="d-none">Votre message n'a pas pu être envoyé ...</div>
        <div id='mail-success' className="d-none">Votre message a bien été envoyé. À bientôt !</div> */}
      </div>
    </form>
  );
};

export default FormContact;
