import './FormContact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function FormContact() {

  const formRef = useRef();
  const popupRef = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('tel :', document.contactForm.from_phone.value === "")
    console.log('mail :', document.contactForm.from_email.value === "")

    if (document.contactForm.from_email.value === "" && document.contactForm.from_phone.value === "") {
      console.log("popup à faire : champs vides");
      popupRef.current.classList.remove('d-none');
    } else {

      emailjs
        .sendForm(serviceId, templateId, formRef.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            alert('Message envoyé, nous vous recontactons très bientôt !')
            document.contactForm.reset();
            popupRef.current.classList.add('d-none');
          },
          (error) => {
            alert(`Le message n'a pas pu être envoyé, veuillez réessayer ...   ${JSON.stringify(error)}`)
          },
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} name='contactForm'>
      <p>Vous avez également la possibilité de nous envoyer un message directement :</p>
      <div className="row">
        <div className="col-9 col-sm-5 col-md-4">
          <input type="text" name="from_name" id='from_name' placeholder='Nom' autoCapitalize='words' required/>
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
      <div className="popup--give-contact d-none" ref={popupRef}>Donnez-nous un moyen de vous recontacter : e-mail ou téléphone !</div>
      <div className="row">
        <div className="col-11">
          <textarea name="message" id='message' placeholder='Message' required/>
        </div>
      </div>
      <div className="d-flex">
        <input type="submit" value="Go !"
        className="btn-tommette " />
      </div>
    </form>
  );
};

export default FormContact;
